/// <reference types="node" resolution-mode="require"/>
type Input = string | number | Buffer;
export declare function zeededChoose<T>(seed: Input, list: T[]): T;
export default zeededChoose;
