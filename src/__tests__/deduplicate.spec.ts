import { deduplicate } from '../deduplicate';

describe('deduplicate', () => {
  test('should return an empty array when input is an empty array', () => {
    expect(deduplicate([])).toEqual([]);
  });

  test('should return the same array when there are no duplicates', () => {
    const input = [1, 2, 3];
    const expected = [1, 2, 3];
    expect(deduplicate(input)).toEqual(expected);
  });

  test('should remove duplicates from an array of numbers', () => {
    const input = [1, 2, 2, 3, 3, 3];
    const expected = [1, 2, 3];
    expect(deduplicate(input)).toEqual(expected);
  });

  test('should remove duplicates from an array of strings', () => {
    const input = ['a', 'b', 'b', 'c', 'c', 'c'];
    const expected = ['a', 'b', 'c'];
    expect(deduplicate(input)).toEqual(expected);
  });

  test('should handle an array with mixed types', () => {
    const input = [1, 'a', 1, 'b', 'a'];
    const expected = [1, 'a', 'b'];
    expect(deduplicate(input)).toEqual(expected);
  });

  test('should return the same array when all elements are unique', () => {
    const input = [1, 'a', true, null, undefined];
    const expected = [1, 'a', true, null, undefined];
    expect(deduplicate(input)).toEqual(expected);
  });
});
