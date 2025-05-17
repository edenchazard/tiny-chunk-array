import { it, expect, describe } from 'vitest';
import { chunkArray } from '../src';

describe('chunkArray', () => {
  it('should chunk an array into smaller arrays of a specified size', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunkArray(arr, 2);
    expect(chunked).to.eql([[1, 2], [3, 4], [5]]);
  });
});
