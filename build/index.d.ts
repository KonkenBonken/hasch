/// <reference types="node" resolution-mode="require"/>
type SingleInput = string | number | Buffer | boolean | bigint | undefined | null | Date;
export type Input = SingleInput | {
    [key: string]: Input;
} | Map<Input, Input> | Set<Input> | Input[];
export type UnionRange<N = 37, Result extends Array<unknown> = []> = (Result['length'] extends N ? Exclude<Result[number], 1> : UnionRange<N, [...Result, Result['length']]>);
export declare function hasch(input: Input, options?: {
    seed?: Input;
    base?: 0;
    decimal?: false;
}): bigint;
export declare function hasch(input: Input, options: {
    seed?: Input;
    base: Exclude<UnionRange, 0>;
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
