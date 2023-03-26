/// <reference types="node" resolution-mode="require"/>
type Input = string | number | Buffer;
type Seed = number | bigint;
type UnionRange<N = 37, Result extends Array<unknown> = []> = (Result['length'] extends N ? Exclude<Result[number], 1> : UnionRange<N, [...Result, Result['length']]>);
export declare function hasch(input: Input, options?: {
    seed?: Seed;
    base?: 0;
}): bigint;
export declare function hasch(input: Input, options: {
    seed?: Seed;
    base: Exclude<UnionRange, 0>;
    length?: number;
}): string;
export default hasch;
