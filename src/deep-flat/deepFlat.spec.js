//import { deepFlat } from './deep-flat.js';

describe('deepFlat', () => {
  it('should flatten a nested array withnumbers', () => {
    const nestedArray = [1, [2, [3, [4]], 5]];
    const expected = [1, 2, 3, 4, 5];
  });
  it('should flattten a nested array with strings and arrays', () => {
    const nestedArray = ['a'[('b', ['c'], ['d'])], ['e']];
    const expected = ['a', 'b', 'c', 'd', 'e'];
  });
  it('should flatten a nested array with empty array', () => {
    const nestedArray = [];
    const expected = [];
  });
});
