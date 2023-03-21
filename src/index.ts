import xxh32 from 'xxh32';

export function hasch(uint8Arr: Uint8Array) {
  return xxh32(uint8Arr);
}

export default hasch;
