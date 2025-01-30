import { Input } from './index.js';
export declare function haschString(input: Input, length: number): string;
export declare function haschString(input: Input, options?: {
    base?: number;
    length?: number;
}): string;
export default function haschString(input: Input, options?: number | {
    base?: number;
    length?: number;
}): string;
