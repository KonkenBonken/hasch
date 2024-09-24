/// <reference types="node" resolution-mode="require"/>
type Input = string | number | Buffer | boolean | Input[];
type Seed = number | bigint | boolean;
type UnionRange<N = 37, Result extends Array<unknown> = []> = (Result['length'] extends N ? Exclude<Result[number], 1> : UnionRange<N, [...Result, Result['length']]>);
export declare function hasch(input: Input, options?: {
    seed?: Seed;
    base?: 0;
    decimal?: false;
}): bigint;
export declare function hasch(input: Input, options: {
    seed?: Seed;
    base: Exclude<UnionRange, 0>;
    length?: number;
    decimal?: false;
}): string;
export declare function hasch(input: Input, options: {
    seed?: Seed;
    decimal: true;
}): number;
export declare function hasch<T>(input: Input, options: {
    seed?: Seed;
    choose: T[];
}): T;
export default hasch;
