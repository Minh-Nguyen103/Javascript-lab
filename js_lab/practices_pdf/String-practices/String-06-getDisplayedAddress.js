const KEY_FORMAT = ['number', 'street', 'ward', 'district', 'city'];

function getDisplayedAddressV1(address) {
  //validate args
  if (typeof address !== 'object' || Object.keys(address).length === 0) return '';

  //process
  const addressKey = Object.keys(address);

  const filterKeyFormat = KEY_FORMAT.filter((key) => addressKey.includes(key));

  let displayAddress = '';

  filterKeyFormat.forEach((element, index) => {
    if (element === 'number') {
      displayAddress = `${address[element]}${' '}`;
    } else {
      displayAddress = `${displayAddress}${address[element]}${', '}`;
    }
  });

  return displayAddress.slice(0, displayAddress.length - 2);
}

console.log(
  getDisplayedAddressV1({
    street: 'Nguyen Cong Tru',
    number: 123,
    ward: 'Ward 11',
    country: 'Viet Nam',
  })
);

function getDisplayedAddressV2(address) {
  //validate args
  if (typeof address !== 'object' || Object.keys(address).length === 0) return '';

  //process
  let addressValue = [];

  KEY_FORMAT.forEach((element) => {
    if (address[element] !== undefined) addressValue.push(address[element]);
  });

  if (addressValue.length === 0) return '';

  const mapAddressValue = addressValue.map((key, index) => {
    if (typeof key === 'number') {
      return `${key}${' '}`;
    } else {
      return `${key}${', '}`;
    }
  });

  const displayAddress = mapAddressValue.join('');

  return displayAddress.slice(0, displayAddress.length - 2);
}
console.log(
  getDisplayedAddressV2({
    street: 'Nguyen Cong Tru',
    // number: 123,
    ward: 'Ward 11',
    country: 'Viet Nam',
  })
);

function getDisplayedAddressV3(address) {
  //validate args
  if (typeof address !== 'object' || Object.keys(address).length === 0) return '';

  //process
  let addressValue = [];

  KEY_FORMAT.forEach((element) => {
    if (address[element] !== undefined) addressValue.push(address[element]);
  });

  if (addressValue.length === 0) return '';
  let valueNumber = '';

  if (typeof addressValue[0] === 'number') {
    valueNumber = addressValue[0];
    addressValue.shift();
  }

  const mapAddressValue = addressValue.map((key, index) => `${' '}${key}`);

  return `${valueNumber} ${mapAddressValue.join()}`.trim();
}
console.log(
  getDisplayedAddressV3({
    street: 'Nguyen Cong Tru',
    number: 123,
    ward: 'Ward 11',
    country: 'Viet Nam',
  })
);

function getDisplayedAddressV4(address) {
  //validate args
  if (typeof address !== 'object' || Object.keys(address).length === 0) return '';

  //process
  let valueAddress = [];

  KEY_FORMAT.forEach((element) => {
    if (element in address) valueAddress.push(address[element]);
  });

  if (valueAddress.length === 0) return '';

  const displayAddress = valueAddress.reduce((displayAddress, currentValue) => {
    if (!Number.isNaN(Number.parseInt(currentValue))) {
      console.log(displayAddress);
      displayAddress = `${currentValue}${' '}`;
      return displayAddress;
    } else {
      displayAddress = `${displayAddress}${currentValue}${', '}`;
      return displayAddress;
    }
  }, '');

  return displayAddress.slice(0, displayAddress.length - 2);
}
console.log(
  getDisplayedAddressV4({
    street: 'Nguyen Cong Tru',
    number: 123,
    country: 'Viet Nam',
    a: 'aaaaa',
    ward: 'Ward 11',
  })
);
