import { isSymetricNumber } from './Number-07-isSymetricNumber-main';

describe('isSymetricNumber(n)', () => {
  it('should return false when n <= 1 and n >= 1000000', () => {
    [1, 0, -1, 1000000, 1000001].forEach((number) => {
      expect(isSymetricNumber(number)).toBe(false);
    });
  });

  it('should return false when n not a symetric number', () => {
    [12345, 12211, 45653, 1223, 98780].forEach((number) => {
      expect(isSymetricNumber(number)).toBe(false);
    });
  });

  it('should return true when n a symetric number', () => {
    [12321, 123321, 45654, 3443, 98789, 567765, 908809].forEach((number) => {
      expect(isSymetricNumber(number)).toBe(true);
    });
  });
});
