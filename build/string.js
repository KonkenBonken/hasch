import hasch from './index.js';
export default function haschString(input, options = {}) {
    if (typeof options === 'number')
        return hasch(input, { base: 36, length: options });
    const { base = 36, length } = options;
    return hasch(input, { base, length });
}
