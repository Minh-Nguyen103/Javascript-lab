import { hasTwoDigitsWithSum } from './Number-09-hasTwoDigitsWithSum-main';

describe('hasTwoDigitsWithSum(n,sum)', () => {
  it('should return false when n <= 9 and n >= 1000000', () => {
    //With array have element <= 9 and >= 0
    Array.from({ length: 9 }, (x, idx) => idx).forEach((number) => {
      expect(hasTwoDigitsWithSum(number, 2)).toBe(false);
    });

    //another issue
    [100000, 1000001].forEach((number) => {
      expect(hasTwoDigitsWithSum(number, 2)).toBe(false);
    });
  });

  it('should return false when sum <= 0 and sum >= 19', () => {
    [0, 19, 20, 30, 100, -1, 21].forEach((number) => {
      expect(hasTwoDigitsWithSum(number)).toBe(false);
    });
  });

  it('should return false when n not include two digit with sum ', () => {
    [10, 101, 456, 89, 14567, 89124].forEach((number) => {
      expect(hasTwoDigitsWithSum(number, 15)).toBe(false);
    });
  });

  it('should return true when n include two digit with sum ', () => {
    [19, 2637488, 38007, 451226, 55678, 2346].forEach((number) => {
      expect(hasTwoDigitsWithSum(number, 10)).toBe(true);
    });
  });
});
