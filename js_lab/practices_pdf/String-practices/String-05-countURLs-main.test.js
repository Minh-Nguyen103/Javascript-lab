import { countURLs } from './String-05-countURLs-main';

describe('countURLs(str)', () => {
  it('should return 0 in case str is empty', () => {
    expect(countEmails('')).toBe(0);
  });

  it('should return 0 in case url not start With list protocol', () => {
    expect(countEmails('my website is: httpp://abc.com/index.html')).toBe(0);
    expect(countEmails('my website is: htttps://abc.com')).toBe(0);
    expect(countEmails('my website is: wws://abc.com/')).toBe(0);
    expect(
      countEmails('my website is: wssw://abc.com/product/productDetail you can visit it')
    ).toBe(0);
  });

  it('should return 0 in case url have domain not include list [.com, .vn, .com.vn]', () => {
    expect(countEmails('my website is: http://abc.com.github/index.html')).toBe(0);
    expect(countEmails('my website is: https://abc.yahoo.vn.github')).toBe(0);
    expect(countEmails('my website is: ws://a.com.bc.comm/')).toBe(0);
    expect(
      countEmails('my website is: wss://abc.com.vn./product/productDetail you can visit it')
    ).toBe(0);
  });

  it('should return 0 in case url have length name domain < 3', () => {
    expect(countEmails('my website is: http://.com.github/index.html')).toBe(0);
    expect(countEmails('my website is: https://a.yahoo.vn.github')).toBe(0);
    expect(
      countEmails('my website is: wss://ab.com.vn./product/productDetail you can visit it')
    ).toBe(0);
  });

  it('should return count in case url valid', () => {
    expect(countEmails('my website is: http://pmnguyen.com/index.html')).toBe(1);
    expect(countEmails('my website is: https://a.com.com.vn')).toBe(1);
    expect(
      countEmails(
        'my website is: wss://minhnguyen.github.vn.com.vn/product/productDetail you can visit it'
      )
    ).toBe(1);
  });
});
