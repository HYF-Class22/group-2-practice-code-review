import { intersection } from './intersection.js';

for (const solution of [intersection]) {
  describe(
    solution.name +
    ': return an array of values that are in both the first and the second arrays',
    () => {
      it('[2, 1], [2, 3] => [2]', () => {
        expect(solution([2, 1], [2, 3])).toEqual([2]);
      });
      it('[2, 1, 2], [2, 3] => [2]', () => {
        expect(solution([2, 1, 2], [2, 3])).toEqual([2]);
      });
      it('[1, 2, 3], [4, 5, 6] => []', () => {
        expect(solution([1, 2, 3], [4, 5, 6])).toEqual([]);
      });
      it('[], [1, 2, 3] => []', () => {
        expect(solution([], [1, 2, 3])).toEqual([]);
      });
      it('[1, 2, 3], [] => []', () => {
        expect(solution([1, 2, 3], [])).toEqual([]);
      });
      it('[], [] => []', () => {
        expect(solution([], [])).toEqual([]);
      });
      it('[1, 2, 3], [3, 2, 1] => [1, 2, 3]', () => {
        expect(solution([1, 2, 3], [3, 2, 1])).toEqual([1, 2, 3]);
      });
      it('[1, "2", true], ["2", false] => ["2"]', () => {
        expect(solution([1, '2', true], ['2', false])).toEqual(['2']);
      });
    },
  );
}
