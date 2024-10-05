import { XXH3_128 as xxh128 } from 'xxh3-ts';

type SingleInput = string | number | Buffer | boolean | bigint | undefined | null;
export type Input = SingleInput | { [key: string]: Input } | Input[];

export type UnionRange<
  N = 37,
  Result extends Array<unknown> = [],
> =
  (Result['length'] extends N ? Exclude<Result[number], 1> : UnionRange<N, [...Result, Result['length']]>)

function bufferToBigint(buffer: Buffer): bigint {
  return BigInt(`0x${buffer.toString("hex")}`);
}

function inputToBuffer(input: SingleInput): Buffer {
  if (Buffer.isBuffer(input))
    return input;

  if (typeof input === 'number')
    return Buffer.from([...Array(Math.floor(input / 0xff)).fill(0xff), input % 0xff]);

  return Buffer.from('' + input);
}

export function hasch(input: Input, options?: {
  seed?: Input
  base?: 0,
  decimal?: false
}): bigint;

export function hasch(input: Input, options: {
  seed?: Input
  base: Exclude<UnionRange, 0>
  length?: number,
  decimal?: false
}): string;

export function hasch(input: Input, options: {
  seed?: Input
  decimal: true
}): number;

export function hasch<T>(input: Input, options: {
  seed?: Input
  choose: T[]
}): T;

export function hasch<T>(
  input: Input,
  {
    seed = 0,
    base = 0,
    length,
    decimal = false,
    choose
  }: {
    seed?: Input
    base?: number
    length?: number
    decimal?: boolean
    choose?: T[]
  } = {}
) {
  if (Array.isArray(input))
    input = input.map(item => hasch(item, { base: 36 })).join();
  if (Array.isArray(seed))
    seed = seed.map(item => hasch(item, { base: 36 })).join();

  if (typeof input === 'object' && input !== null && !Buffer.isBuffer(input))
    input = hasch(Object.entries(input), { base: 36 });
  if (typeof seed === 'object' && seed !== null && !Buffer.isBuffer(seed))
    seed = hasch(Object.entries(seed), { base: 36 });

  input = inputToBuffer(input);

  if (typeof seed !== 'bigint')
    seed = bufferToBigint(inputToBuffer(seed));

  const hash = xxh128(input, seed);

  if (base !== 0) {
    let str = hash.toString(base);
    if (length !== undefined)
      str = str.padStart(length, '0').slice(0, length);
    return str;
  }

  if (decimal || choose) {
    const dec = +hash.toString().slice(-16) / 1e16;

    if (decimal)
      return dec;
    if (choose)
      return choose[Math.floor(dec * choose.length)];
  }

  return hash;
}

export default hasch;
