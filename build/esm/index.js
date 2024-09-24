var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { XXH3_128 as xxh128 } from 'xxh3-ts';
export function hasch(input, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.seed, seed = _c === void 0 ? 0 : _c, _d = _b.base, base = _d === void 0 ? 0 : _d, length = _b.length, _e = _b.decimal, decimal = _e === void 0 ? false : _e, choose = _b.choose;
    if (typeof input === 'boolean')
        input = input ? '__true' : '__false';
    if (typeof seed === 'boolean')
        seed = seed ? 466 : 811;
    if (typeof input === 'string')
        input = Buffer.from(input);
    else if (typeof input === 'number')
        input = Buffer.from(__spreadArray(__spreadArray([], Array(Math.floor(input / 0xff)).fill(0xff), true), [input % 0xff], false));
    var hash = xxh128(input, BigInt(seed));
    if (base !== 0) {
        var str = hash.toString(base);
        if (length !== undefined)
            str = str.padStart(length, '0').slice(0, length);
        return str;
    }
    if (decimal || choose) {
        var dec = +hash.toString().slice(-16) / 1e16;
        if (decimal)
            return dec;
        if (choose)
            return choose[Math.floor(dec * choose.length)];
    }
    return hash;
}
export default hasch;
