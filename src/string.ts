import hasch, { Input, UnionRange } from './index.js';

export function haschString(input: Input, length: number): string;

export function haschString(input: Input, options?: { base?: Exclude<UnionRange, 0>, length?: number }): string;

export default function haschString(input: Input, options: number | { base?: Exclude<UnionRange, 0>, length?: number } = {}) {
  if (typeof options === 'number')
    return hasch(input, { base: 36, length: options });

  const { base = 36, length } = options;
  return hasch(input, { base, length });
}
