/// <reference types="node" resolution-mode="require"/>
type Input = Uint8Array | string | number | Buffer;
interface Options {
    seed?: number;
    base?: number;
}
export declare function hasch(input: Input, options?: Options & {
    base?: 0;
}): number;
export declare function hasch(input: Input, options: Options & {
    base: number;
}): string;
export default hasch;
