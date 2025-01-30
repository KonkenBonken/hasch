/// <reference types="node" resolution-mode="require"/>
type SingleInput = string | number | Buffer | boolean | bigint | undefined | null | Date | RegExp | Error;
export type Input = SingleInput | {
    [key: string]: Input;
} | Map<Input, Input> | Set<Input> | Input[];
export declare function hasch(input: Input, options?: {
    seed?: Input;
    base?: 0;
    decimal?: false;
}): bigint;
export declare function hasch(input: Input, options: {
    seed?: Input;
    base: number | string;
    length?: number;
    decimal?: false;
}): string;
export declare function hasch(input: Input, options: {
    seed?: Input;
    decimal: true;
}): number;
export declare function hasch<T>(input: Input, options: {
    seed?: Input;
    choose: T[];
}): T;
export default hasch;
