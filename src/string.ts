import hasch, { Input } from './index.js';

export function haschString(input: Input, length: number): string;

export function haschString(input: Input, options?: { base?: number | string, length?: number }): string;

export default function haschString(input: Input, options: number | { base?: number | string, length?: number } = {}) {
  if (typeof options === 'number')
    return hasch(input, { base: Infinity, length: options });

  const { base = Infinity, length } = options;
  return hasch(input, { base, length });
}
