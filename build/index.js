import { XXH3_128 as xxh128 } from 'xxh3-ts';
function bufferToBigint(buffer) {
    return BigInt(`0x${buffer.toString("hex")}`);
}
function inputToBuffer(input) {
    if (Buffer.isBuffer(input))
        return input;
    if (typeof input === 'number')
        return Buffer.from([...Array(Math.floor(input / 0xff)).fill(0xff), input % 0xff]);
    return Buffer.from('' + input);
}
export function hasch(input, { seed = 0, base = 0, length, decimal = false, choose } = {}) {
    if (Array.isArray(input))
        input = input.map(item => hasch(item, { base: 36 })).join();
    if (Array.isArray(seed))
        seed = seed.map(item => hasch(item, { base: 36 })).join();
    input = inputToBuffer(input);
    if (typeof seed !== 'bigint')
        seed = bufferToBigint(inputToBuffer(seed));
    const hash = xxh128(input, seed);
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
