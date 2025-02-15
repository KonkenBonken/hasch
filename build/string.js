import hasch from './index.js';
export default function haschString(input, options = {}) {
    if (typeof options === 'number')
        return hasch(input, { base: Infinity, length: options });
    const { base = Infinity, length } = options;
    return hasch(input, { base, length });
}
export function haschHex(input, length) {
    return hasch(input, { base: 16, length });
}
export function hasch64(input, length) {
    return hasch(input, { base: 64, length });
}
export function haschAlpha(input, length) {
    return hasch(input, { base: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', length });
}
export function haschCSS(input, length) {
    const firstChar = hasch(input, { base: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_', length: 1, seed: 'CSS' });
    length &&= length - 1;
    const rest = hasch(input, { base: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-', length });
    return firstChar + rest;
}
