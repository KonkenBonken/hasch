import { XXH3_128 as xxh128 } from 'xxh3-ts';
export function hasch(input, { seed = 0, base = 0, length, decimal = false } = {}) {
    if (typeof input === 'string')
        input = Buffer.from(input);
    else if (typeof input === 'number')
        input = Buffer.from([...Array(Math.floor(input / 0xff)).fill(0xff), input % 0xff]);
    const hash = xxh128(input, BigInt(seed));
    if (base !== 0) {
        let str = hash.toString(base);
        if (length !== undefined)
            str = str.padStart(length, '0').slice(0, length);
        return str;
    }
    if (decimal) {
        const dec = +hash.toString().slice(-16) / 1e16;
        return dec;
    }
    return hash;
}
export default hasch;
//# sourceMappingURL=index.js.map