import { isIncreasingNumber } from './Number-01-IsIncreasingNumber-main';

describe('isIncreasingNumber(n)', () => {
  it('should return false when n < 10 ', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((number) => {
      expect(isIncreasingNumber(number)).toBe(flase);
    });
  });

  it('should return false when n > 1000000 ', () => {
    [1100000, 1000001].forEach((number) => {
      expect(isIncreasingNumber(number)).toBe(flase);
    });
  });

  it('should return false when n not an increasing number ', () => {
    [11, 22, 1232, 31, 2343, 21].forEach((number) => {
      expect(isIncreasingNumber(number)).toBe(flase);
    });
  });

  it('should return true when n an increasing number ', () => {
    [12, 23, 1234, 345, 456].forEach((number) => {
      expect(isIncreasingNumber(number)).toBe(true);
    });
  });
});
