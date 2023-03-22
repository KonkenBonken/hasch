/// <reference types="node" resolution-mode="require"/>
type Input = Uint8Array | string | number | Buffer;
type UnionRange<N = 37, Result extends Array<unknown> = []> = (Result['length'] extends N ? Exclude<Result[number], 1> : UnionRange<N, [...Result, Result['length']]>);
export declare function hasch(input: Input, options?: {
    seed?: number;
    base?: 0;
}): number;
export declare function hasch(input: Input, options: {
    seed?: number;
    base: Exclude<UnionRange, 0>;
    length?: number;
}): string;
export default hasch;
