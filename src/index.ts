import { XXH3_128 as xxh128 } from 'xxh3-ts';

type Input = string | number | Buffer;
type Seed = number | bigint;

type UnionRange<
  N = 37,
  Result extends Array<unknown> = [],
> =
  (Result['length'] extends N ? Exclude<Result[number], 1> : UnionRange<N, [...Result, Result['length']]>)

export function hasch(input: Input, options?: {
  seed?: Seed
  decimal: true
}): number;

export function hasch(input: Input, options?: {
  seed?: Seed
  base?: 0,
  decimal?: false
}): bigint;

export function hasch(input: Input, options: {
  seed?: Seed
  base: Exclude<UnionRange, 0>
  length?: number,
  decimal?: false
}): string;

export function hasch(
  input: Input,
  {
    seed = 0,
    base = 0,
    length,
    decimal = false
  }: {
    seed?: Seed
    base?: number
    length?: number,
    decimal?: boolean
  } = {}
) {
  if (typeof input === 'string')
    input = Buffer.from(input);
  else if (typeof input === 'number')
    input = Buffer.from([...Array(Math.floor(input / 0xff)).fill(0xff), input % 0xff]);

  const hash = xxh128(input, BigInt(seed));

  if (base !== 0) {
    let str = hash.toString(base);
    if (length !== undefined)
      str = str.padStart(length, '0').slice(0, length);
    return str;
  }

  if (decimal) {
    const dec = +hash.toString().slice(-16) / 1e16;
    return dec;
  }

  return hash;
}

export default hasch;
