import hasch from './index.js';
export default function haschString(input, options = {}) {
    if (typeof options === 'number')
        return hasch(input, { base: Infinity, length: options });
    const { base = Infinity, length } = options;
    return hasch(input, { base, length });
}
