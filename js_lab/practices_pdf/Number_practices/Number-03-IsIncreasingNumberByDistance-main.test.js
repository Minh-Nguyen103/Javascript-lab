import { isIncreasingNumberByDistance } from './Number-03-IsIncreasingNumberByDistance-main';

describe('IsIncreasingNumberByDistance(n, x)', () => {
  it('should return false when n < 10 ', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((number) => {
      expect(isIncreasingNumberByDistance(number, 2)).toBe(flase);
    });
  });

  it('should return false when x <= 0 and x >= 5 ', () => {
    [0, 5, -1, 6].forEach((number) => {
      expect(isIncreasingNumberByDistance(24, number)).toBe(flase);
    });
  });

  it('should return false when n not an increasing number by distance 1', () => {
    [11, 13, 134, 457].forEach((number) => {
      expect(isIncreasingNumberByDistance(number, 1)).toBe(flase);
    });
  });

  // and more test for distance by 2 3 4

  it('should return true when n an increasing number by distance ', () => {
    [14, 47, 258, 147].forEach((number) => {
      expect(isIncreasingNumberByDistance(number, 3)).toBe(true);
    });
  });
});
