import hasch, { Input } from './index.js';

export function haschString(input: Input, length: number): string;

export function haschString(input: Input, options?: { base?: number | string, length?: number }): string;

export default function haschString(input: Input, options: number | { base?: number | string, length?: number } = {}) {
  if (typeof options === 'number')
    return hasch(input, { base: Infinity, length: options });

  const { base = Infinity, length } = options;
  return hasch(input, { base, length });
}

/** Returns a string in base 16 */
export function haschHex(input: Input, length?: number) {
  return hasch(input, { base: 16, length });
}

/** Returns a string in base 64 */
export function hasch64(input: Input, length?: number) {
  return hasch(input, { base: 64, length });
}

/** Returns a string containing only characters [a-zA-Z] */
export function haschAlpha(input: Input, length?: number) {
  return hasch(input, { base: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', length });
}

/** Returns a string that can be used as a valid CSS identifier */
export function haschCSS(input: Input, length?: number) {
  const firstChar = hasch(input, { base: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_', length: 1, seed: 'CSS' });
  length &&= length - 1;
  const rest = hasch(input, { base: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-', length });

  return firstChar + rest;
}
