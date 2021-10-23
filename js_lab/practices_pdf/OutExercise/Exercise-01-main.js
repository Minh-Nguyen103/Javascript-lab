//input

const cars = [
  { name: 'Innova', price: 5000, brand: 'Toyota' },
  { name: 'Civic', price: 5200, brand: 'Honda' },
  { name: 'Fortuner', price: 7000, brand: 'Toyota' },
  { name: 'City', price: 9000, brand: 'Honda' },
];

//output

[
  {
    brand: 'Toyota',
    cars: [
      { name: 'Innova', price: 5000, brand: 'Toyota' },
      { name: 'Fortuner', price: 7000, brand: 'Toyota' },
    ],
  },

  {
    brand: 'Honda',
    cars: [
      { name: 'Civic', price: 5200, brand: 'Honda' },
      { name: 'City', price: 9000, brand: 'Honda' },
    ],
  },
];

function syntheticBrand(carsList) {
  //validate args
  if (!Array.isArray(carsList) || carsList.length === 0) return [];

  if (carsList.some((car) => typeof car !== 'object')) return [];

  //process
  const objCar = carsList.reduce((obj, currentCar) => {
    const valueOfBrand = currentCar.brand;

    if (obj[valueOfBrand] === undefined) {
      obj[valueOfBrand] = [currentCar];
    } else {
      obj[valueOfBrand].push(currentCar);
    }

    return obj;
  }, {});

  const entriesObj = Object.entries(objCar);
  let result = [];

  entriesObj.forEach(([key, value]) => {
    result.push({
      brand: key,
      cars: value,
    });
  });

  return result;
}

console.log(JSON.stringify(syntheticBrand(cars)));

// const a = {
//   brand: 'Honda',
//   cars: [
//     { name: 'Civic', price: 5200, brand: 'Honda' },
//     { name: 'City', price: 9000, brand: 'Honda' },
//   ],
// };
// const b = {
//   brand: 'Toyota',
//   cars: [
//     { name: 'Innova', price: 5000, brand: 'Toyota' },
//     { name: 'Fortuner', price: 7000, brand: 'Toyota' },
//   ],
// };

// const result = [];
// result.push(a);
// result.push(b);

// result.forEach((element) => {
//   console.log(element);
// });

// function transformArray(cars) {
//   if (!Array.isArray(cars) || cars.length === 0) return [];

//   const res = [];
//   const map = {};

//   for (let i = 0; i < cars.length; i++) {
//     let car = cars[i];

//     if (!(car.brand in map)) {
//       map[car.brand] = { brand: car.brand, cars: [] };
//       res.push(map[car.brand]);
//     }
//     map[car.brand].cars.push(car);
//   }

//   return res;
// }
// console.log(transformArray(cars));
// console.log(JSON.stringify(transformArray(cars)));

const map = {};
map['Honda'] = { brand: 'Honda', cars: [] };

console.log(map);
