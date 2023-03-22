import xxh32 from 'xxh32';

type Input = Uint8Array | string | number | Buffer;

type UnionRange<
  N = 37,
  Result extends Array<unknown> = [],
> =
  (Result['length'] extends N ? Exclude<Result[number], 1> : UnionRange<N, [...Result, Result['length']]>)

interface Options {
  seed?: number
  base?: UnionRange
}

export function hasch(input: Input, options?: Options & { base?: 0 }): number;
export function hasch(input: Input, options: Options & { base: Exclude<UnionRange, 0> }): string;
export function hasch(
  input: Input,
  {
    seed = 0,
    base = 0
  }: Options = {}
) {
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
