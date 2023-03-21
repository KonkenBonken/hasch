import xxh32 from 'xxh32';

export function hasch(input: Uint8Array | string) {
  if (typeof input === 'string')
    input = new TextEncoder().encode(input);

  return xxh32(input);
}

export default hasch;
