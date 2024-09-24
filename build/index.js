import { XXH3_128 as xxh128 } from 'xxh3-ts';
function toBuffer(input) {
    if (typeof input === 'boolean')
        input = input ? '__true' : '__false';
    if (typeof input === 'bigint')
        input = input.toString(36);
    if (typeof input === 'string')
        return Buffer.from(input);
    if (typeof input === 'number')
        return Buffer.from([...Array(Math.floor(input / 0xff)).fill(0xff), input % 0xff]);
    return input;
}
export function hasch(input, { seed = 0, base = 0, length, decimal = false, choose } = {}) {
    if (Array.isArray(input))
        input = input.map(item => hasch(item, { base: 36 })).join();
    input = toBuffer(input);
    if (typeof seed === 'boolean')
        seed = seeog([input, seed])

    const hash = xxh128(input, BigInt(seed));
    if (base !== 0) {
        let str = hash.toString(base);
        if (length !== undefined)
            str = str.padStart(length, '0').slice(0, length);
        return str;
    }
    if (decimal || choose) {
        const dec = +hash.toString().slice(-16) / 1e16;
        if (decimal)
            return dec;
        if (choose)
            return choose[Math.floor(dec * choose.length)];
    }
    return hash;
}
export default hasch;
