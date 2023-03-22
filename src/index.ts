import xxh32 from 'xxh32';

type Input = Uint8Array | string | number | Buffer;

type UnionRange<
  N = 37,
  Result extends Array<unknown> = [],
> =
  (Result['length'] extends N ? Exclude<Result[number], 1> : UnionRange<N, [...Result, Result['length']]>)

export function hasch(input: Input, options?: {
  seed?: number
  base?: 0
}): number;

export function hasch(input: Input, options: {
  seed?: number
  base: Exclude<UnionRange, 0>
  length?: number
}): string;

export function hasch(
  input: Input,
  {
    seed = 0,
    base = 0,
    length
  }: {
    seed?: number
    base?: number
    length?: number
  } = {}
) {
  if (typeof input === 'string')
    input = new TextEncoder().encode(input);

  else if (typeof input === 'number')
    input = new Uint8Array([input]);

  else if (Buffer.isBuffer(input))
    input = new Uint8Array(input);

  const hash = xxh32(input, seed);

  if (base !== 0) {
    let str = hash.toString(base);
    if (length !== undefined)
      str = str.padStart(length, '0').slice(0, length);
    return str;
  }

  return hash;
}

export default hasch;
