import xxh32 from 'xxh32';

type Input = Uint8Array | string | number | Buffer;

interface Options {
  seed?: number
  base?: number
}

export function hasch(input: Input, options?: Options & { base?: 0 }): number;
export function hasch(input: Input, options: Options & { base: number }): string;
export function hasch(
  input: Input,
  {
    seed = 0,
    base = 0
  }: Options = {}
) {
  if (base < 0 || base > 36 || base === 1 || !Number.isInteger(base))
    throw RangeError('Option `base` must be an integer in the range 2 - 36 inclusive or 0');

  if (typeof input === 'string')
    input = new TextEncoder().encode(input);

  else if (typeof input === 'number')
    input = new Uint8Array([input]);

  else if (Buffer.isBuffer(input))
    input = new Uint8Array(input);

  const hash = xxh32(input, seed);

  if (base !== 0)
    return hash.toString(base);

  return hash;
}

export default hasch;
