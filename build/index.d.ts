/// <reference types="node" resolution-mode="require"/>
export declare function hasch(input: Uint8Array | string | number | Buffer, { seed }?: {
    seed?: number | undefined;
}): number;
export default hasch;
