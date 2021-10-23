import { isDivisible } from './Number-08-isDivisibleBy10-main';

describe('isDivisible(n)', () => {
  it('should return false when n <= 10 and n >= 1000000', () => {
    [0, -1, 1000000, 1000001].forEach((number) => {
      expect(isDivisible(number)).toBe(false);
    });
  });

  it('should return false when n not a divisible number By 10', () => {
    [10, 29, 89, 123, 678, 233, 443, 111].forEach((number) => {
      expect(isDivisible(number)).toBe(false);
    });
  });

  it('should return true when n a divisible number By 10', () => {
    [442, 1234, 55, 91, 123455,199191, 721, 5221, 343, 811, 22222, 3331].forEach((number) => {
      expect(isDivisible(number)).toBe(true);
    });
  });
});
