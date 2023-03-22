import xxh32 from 'xxh32';
export function hasch(input, { seed = 0, base = 0 } = {}) {
    if (base < 0 || base > 36 || base === 1 || !Number.isInteger(base))
        throw RangeError('Option `base` must be an integer in the range 2 - 36 inclusive or 0');
    if (typeof input === 'string')
        input = new TextEncoder().encode(input);
    else if (typeof input === 'number')
        input = new Uint8Array([input]);
    else if (Buffer.isBuffer(input))
        input = new Uint8Array(input);
    const hash = xxh32(input, seed);
    if (base !== 0)
        return hash.toString(base);
    return hash;
}
export default hasch;
//# sourceMappingURL=index.js.map