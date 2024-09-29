import hasch, { Input } from './index.js';

export default function haschShuffle<T extends Input>(input: Input, array: T[]) {
  const seed = hasch(input);

  return array.slice().sort((a, b) => (
    hasch(a, { seed, decimal: true }) - hasch(b, { seed, decimal: true })
  ));
}
