import { isPrime } from './Number-04-isPrime-main';

describe('isPrime(n)', () => {
  it('should return false when n <= 0 and n >= 100000', () => {
    [0, 1000000, -1, 100001].forEach((number) => {
      expect(isPrime(number)).toBe(false);
    });
  });

  it('should return false when n not a prime number', () => {
    [4, 6, 75, 124, 678].forEach((number) => {
      expect(isPrime(number)).toBe(false);
    });
  });

  it('should return true when n a prime number', () => {
    [
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97,
    ].forEach((number) => {
      expect(isPrime(number)).toBe(true);
    });
  });
});
