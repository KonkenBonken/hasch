import hasch, { Input, UnionRange } from './index.js';

export default function haschString(input: Input, { base = 36, length }: { base?: Exclude<UnionRange, 0>, length?: number } = {}) {
  return hasch(input, { base, length });
}
