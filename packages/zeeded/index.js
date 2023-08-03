import hasch from 'hasch';

export default function Zeeded(seed) {
  return hasch(seed, {
    decimal: true
  });
}
