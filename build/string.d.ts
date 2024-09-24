import { Input, UnionRange } from './index.js';
export declare function haschString(input: Input, length: number): string;
export declare function haschString(input: Input, options?: {
    base?: Exclude<UnionRange, 0>;
    length?: number;
}): string;
export default function haschString(input: Input, options?: number | {
    base?: Exclude<UnionRange, 0>;
    length?: number;
}): string;
