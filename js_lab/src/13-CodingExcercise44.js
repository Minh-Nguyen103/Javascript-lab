// //non-recursion
// function binarySearch(studentList, searchName) {
//   //validate args
//   if (!Array.isArray(studentList) || studentList.length === 0) return -1;

//   if (typeof searchName !== 'string' || searchName.trim().length === 0) return -1;

//   if (studentList == null || searchName == null) return -1;

//   //process
//   searchName = searchName.toLowerCase().trim();

//   let left = 0;
//   let right = studentList.length;

//   while (left <= right) {
//     const mid = left + Math.trunc((right - left) / 2);

//     const studentMidName = studentList[mid]['name'].toLowerCase().trim();
//     console.log(studentMidName);

//     if (studentMidName === searchName) return mid;

//     if (studentMidName > searchName) {
//       right = mid - 1;
//     } else left = mid + 1;
//   }

//   return -1;
// }

// const studentList = [
//   { id: 1, name: 'Dat' },
//   { id: 2, name: 'Duy' },
//   { id: 3, name: 'Nguyen' },
//   { id: 4, name: 'Tai' },
//   { id: 5, name: 'Tam' },
// ];
// console.log(binarySearch(studentList, '    '));

//recursion
function binarySearchV1(studentList, searchName, left, right) {
  //validate args
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;

  if (typeof searchName !== 'string' || searchName.trim().length === 0) return -1;

  if (studentList == null || searchName == null) return -1;

  //process
  searchName = searchName.toLowerCase().trim();

  if (left > right) return -1;

  const mid = left + Math.trunc((right - left) / 2);

  const studentMidName = studentList[mid]['name'].toLowerCase().trim();

  if (studentMidName === searchName) return mid;

  if (studentMidName > searchName) return binarySearchV1(studentList, searchName, left, mid - 1);

  return binarySearchV1(studentList, searchName, mid + 1, right);
}
const studentList = [
  { id: 1, name: 'Dat' },
  { id: 2, name: 'Duy' },
  { id: 3, name: 'Nguyen' },
  { id: 4, name: 'Tai' },
  { id: 5, name: 'Tam' },
];
console.log(binarySearchV1(studentList, 'Dat', 0, 5));
