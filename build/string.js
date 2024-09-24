import hasch from './index.js';
export default function haschString(input, { base = 36, length } = {}) {
    return hasch(input, { base, length });
}
