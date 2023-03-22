import xxh32 from 'xxh32';
export function hasch(input, { seed = 0, base = 0, length } = {}) {
    if (typeof input === 'string')
        input = new TextEncoder().encode(input);
    else if (typeof input === 'number')
        input = new Uint8Array([input]);
    else if (Buffer.isBuffer(input))
        input = new Uint8Array(input);
    const hash = xxh32(input, seed);
    if (base !== 0) {
        let str = hash.toString(base);
        if (length !== undefined)
            str = str.padStart(length, '0').slice(0, length);
        return str;
    }
    return hash;
}
export default hasch;
//# sourceMappingURL=index.js.map