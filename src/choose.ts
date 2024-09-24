import hasch, { Input } from './index.js';

export default function haschChoose<T>(input: Input, choose: T[]) {
  return hasch(input, { choose });
}
