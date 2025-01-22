import { XXH3_128 as xxh128 } from 'xxh3-ts';
function bufferToBigint(buffer) {
    return BigInt(`0x${buffer.toString("hex")}`);
}
function inputToSingle(input) {
    if (Array.isArray(input))
        return input.map(item => hasch(item, { base: 36 })).join();
    if (typeof input === 'object' && input !== null && !Buffer.isBuffer(input) && !(input instanceof Date))
        return hasch(Object.entries(input), { base: 36 });
    return input;
}
function inputToBuffer(input) {
    if (Buffer.isBuffer(input))
        return input;
    if (typeof input === 'number')
        return Buffer.from([...Array(Math.floor(input / 0xff)).fill(0xff), input % 0xff]);
    if (input instanceof Date)
        input = input.toISOString();
    return Buffer.from('' + input);
}
export function hasch(input, { seed = 0, base = 0, length, decimal = false, choose } = {}) {
    input = inputToSingle(input);
    seed = inputToSingle(seed) ?? null;
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
