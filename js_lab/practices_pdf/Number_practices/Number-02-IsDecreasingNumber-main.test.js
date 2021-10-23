import { isDecreasingNumber } from './Number_practices/Number-01-isDecreasingNumber-main';

describe('isDecreasingNumber(n)', () => {
  it('should return false when n < 10 ', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((number) => {
      expect(isDecreasingNumber(number)).toBe(flase);
    });
  });

  it('should return false when n > 1000000 ', () => {
    [1100000, 1000001].forEach((number) => {
      expect(isDecreasingNumber(number)).toBe(flase);
    });
  });

  it('should return false when n not an decreasing number ', () => {
    [11, 22, 4323, 656, 56, 43].forEach((number) => {
      expect(isDecreasingNumber(number)).toBe(flase);
    });
  });

  it('should return true when n an decreasing number ', () => {
    [21, 32, 4321, 543, 8765].forEach((number) => {
      expect(isDecreasingNumber(number)).toBe(true);
    });
  });
});
