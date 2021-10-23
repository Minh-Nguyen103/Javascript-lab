// const cars = [
//   { name: 'Innova', price: 5000, brand: 'Toyota' },
//   { name: 'Civic', price: 5200, brand: 'Honda' },
//   { name: 'Fortuner', price: 7000, brand: 'Toyota' },
//   { name: 'City', price: 9000, brand: 'Honda' },
// ];

// //output
// // [
// //     {
// //         brand : 'Toyota',
// //      cars: [
// //         {name: 'Innova', price: 5000, brand: 'Toyota'},
// //         {name: 'Fortuner', price: 7000, brand: 'Toyota'},
// //      ],
// //     },

// //      {
// //          brand : 'Honda',
// //      cars: [
// //         {name: 'Civic', price: 5200, brand: 'Honda'},
// //         {name: 'City', price: 9000, brand: 'Honda'},
// //      ],
// //     },
// // ]

// (function (cars) {
//   //validate args
//   if (!Array.isArray(cars) || cars.length === 0) return [];

//   //process
//   const map = cars.reduce((obj, currentCars) => {
//     obj[currentCars] ??= [currentCars];
//     const carOfBrand = obj[currentCars.brand] ?? [];
//     carOfBrand.push(currentCars);

//     obj[currentCars.brand] = carOfBrand;
//     return obj;
//   }, {});

//   console.log(map);
//   return 1;
// })(cars);

// console.log([1, 2, 3]?.[6]);

// const a = {};
// a.brand ??= 'haha';
// console.log(a.brand);

// const a = { duration: 50 };
// a.duration ??= 10;
// console.log(a.duration);

// console.log(1_000_000);

// please use these constants in your code
const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGE_LIST = ['en', 'vi', 'cn'];

//version 1
function getLanguageCodeFromURL(url) {
  //validate args
  if (typeof url !== 'string') return null;

  //process
  const elementList = url.split('/');
  let support_language = null;
  console.log(elementList);

  elementList.forEach((language) => {
    console.log(language);
    if (SUPPORTED_LANGUAGE_LIST.includes(language)) {
      support_language = language;
    }
  });

  if (support_language !== null) {
    return support_language;
  } else {
    return DEFAULT_LANGUAGE;
  }
}

console.log(getLanguageCodeFromURL('https://abc.com/abc'));
