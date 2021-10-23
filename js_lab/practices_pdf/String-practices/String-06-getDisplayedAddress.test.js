import { getDisplayedAddress } from './String-06-getDisplayedAddress';

describe('getDisplayedAddress(address)', () => {
  it('should return empty object in case address is empty', () => {
    expect(getDisplayedAddress('')).toEqual('');
  });

  it('should return correct address when object address has not full properties', () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: 'Nguyen Cong Tru',
        ward: 'Ward 11',
      })
    ).toEqual('123 Nguyen Cong Tru, Ward 11');
  });

  it('should return correct address when object address has properties different regulation properties', () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: 'Nguyen Cong Tru',
        ward: 'Ward 11',
        country: 'Viet Nam',
      })
    ).toEqual('123 Nguyen Cong Tru, Ward 11');
  });

  it('should return correct address when object address has not full properties', () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: 'Nguyen Cong Tru',
        ward: 'Ward 11',
        district: 'Binh Thanh District',
        city: 'HCM',
      })
    ).toEqual('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCM');
  });
});
