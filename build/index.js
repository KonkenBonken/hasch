import xxh32 from 'xxh32';
export function hasch(input, { seed = 0 } = {}) {
    if (typeof input === 'string')
        input = new TextEncoder().encode(input);
    else if (typeof input === 'number')
        input = new Uint8Array([input]);
    else if (Buffer.isBuffer(input))
        input = new Uint8Array(input);
    return xxh32(input, seed);
}
export default hasch;
//# sourceMappingURL=index.js.map