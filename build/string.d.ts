import { Input, UnionRange } from './index.js';
export default function haschString(input: Input, { base, length }?: {
    base?: Exclude<UnionRange, 0>;
    length?: number;
}): string;
