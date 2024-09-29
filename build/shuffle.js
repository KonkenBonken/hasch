import hasch from './index.js';
export default function haschShuffle(input, array) {
    const seed = hasch(input);
    return array.slice().sort((a, b) => (hasch(a, { seed, decimal: true }) - hasch(b, { seed, decimal: true })));
}
