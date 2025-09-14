import { it, expect, describe } from 'vitest';
import { chunkArray } from '~src/index';

describe('chunkArray', () => {
  it('should chunk an array into smaller arrays of a specified size', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunkArray(arr, 2);
    expect(chunked).toStrictEqual([[1, 2], [3, 4], [5]]);
  });
});
