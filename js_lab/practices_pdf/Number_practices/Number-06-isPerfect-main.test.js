import { isPerfectNumber } from './Number-06-isPerfect-main';

describe('isPerfectNumber(n)', () => {
  it('should return false when n <= 1 and n >= 100000', () => {
    [1, 0, 1000000, -1, 100001].forEach((number) => {
      expect(isPerfectNumber(number)).toBe(false);
    });
  });

  it('should return false when n not a perfect number', () => {
    [5, 567, 345, 128, 89].forEach((number) => {
      expect(isPerfectNumber(number)).toBe(false);
    });
  });

  it('should return true when n a perfect number', () => {
    [6, 28, 496, 8128].forEach((number) => {
      expect(isPerfectNumber(number)).toBe(true);
    });
  });
});
