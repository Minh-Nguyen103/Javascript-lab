import { isPerfectSquare } from './Number-04-isPerfectSquare-main';

describe('isPerfectSquare(n)', () => {
  it('should return false when n <= 0 and n >= 100000', () => {
    [0, 1000000, -1, 100001].forEach((number) => {
      expect(isPerfectSquare(number)).toBe(false);
    });
  });

  it('should return false when n not a perfect square number', () => {
    [5, 8, 15, 57, 165].forEach((number) => {
      expect(isPerfectSquare(number)).toBe(false);
    });
  });

  it('should return true when n a perfect square number', () => {
    [4, 9, 16.25, 36, 225, 289, 576].forEach((number) => {
      expect(isPerfectSquare(number)).toBe(true);
    });
  });
});
