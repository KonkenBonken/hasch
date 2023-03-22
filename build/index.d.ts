/// <reference types="node" resolution-mode="require"/>
type Input = Uint8Array | string | number | Buffer;
type UnionRange<N = 37, Result extends Array<unknown> = []> = (Result['length'] extends N ? Exclude<Result[number], 1> : UnionRange<N, [...Result, Result['length']]>);
interface Options {
    seed?: number;
    base?: UnionRange;
}
export declare function hasch(input: Input, options?: Options & {
    base?: 0;
}): number;
export declare function hasch(input: Input, options: Options & {
    base: Exclude<UnionRange, 0>;
}): string;
export default hasch;
