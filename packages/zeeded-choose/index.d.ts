/// <reference types="node" resolution-mode="require"/>
import hasch from "hasch";
export declare function zeededChoose<T>(seed: Parameters<typeof hasch>[0], list: T[]): T;
export default zeededChoose;
