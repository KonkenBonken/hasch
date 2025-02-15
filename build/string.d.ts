import { Input } from './index.js';
export declare function haschString(input: Input, length: number): string;
export declare function haschString(input: Input, options?: {
    base?: number | string;
    length?: number;
}): string;
export default function haschString(input: Input, options?: number | {
    base?: number | string;
    length?: number;
}): string;
export declare function haschHex(input: Input, length?: number): string;
export declare function hasch64(input: Input, length?: number): string;
export declare function haschAlpha(input: Input, length?: number): string;
export declare function haschCSS(input: Input, length?: number): string;
