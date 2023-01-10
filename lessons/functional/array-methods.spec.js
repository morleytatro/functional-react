import { it, describe, expect } from 'vitest';

import { filter, map, reduce } from './array-methods';

describe('map', () => {
  it('correctly maps values', () => {
    expect(map(x => x * 2, [1, 2, 3, 4])).toStrictEqual([2, 4, 6, 8]);
  });
});

describe('filter', () => {
  it('correctly filters values', () => {
    expect(filter(x => x % 2 === 0, [1, 2, 3, 4])).toStrictEqual([2, 4]);
  });
});

describe('reduce', () => {
  it('correctly reduces values', () => {
    expect(reduce((acc, val) => acc + val, 0, [1, 2, 3, 4])).toBe(10);
  });
});