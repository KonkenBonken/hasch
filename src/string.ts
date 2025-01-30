import hasch, { Input } from './index.js';

export function haschString(input: Input, length: number): string;

export function haschString(input: Input, options?: { base?: number, length?: number }): string;

export default function haschString(input: Input, options: number | { base?: number, length?: number } = {}) {
  if (typeof options === 'number')
    return hasch(input, { base: 62, length: options });

  const { base = 62, length } = options;
  return hasch(input, { base, length });
}
