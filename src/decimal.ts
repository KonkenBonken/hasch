import hasch, { Input } from './index.js';

export default function haschDecimal(input: Input) {
  return hasch(input, { decimal: true });
}
