function findStudentHavingHighestMark(studentList) {
  //validate args
  if (!Array.isArray(studentList) || studentList.length === 0) return undefined;

  for (let index = 0; index < studentList.length; index++) {
    if (typeof studentList[index] !== 'object') return undefined;

    if (!'math' in studentList[index]) return undefined;

    if (typeof studentList[index]['math'] !== 'number') return undefined;
  }

  //process
  let highestMark = 0;
  let idx;
  for (let index = 0; index < studentList.length; index++) {
    if (highestMark < studentList[index]['math']) {
      highestMark = studentList[index]['math'];
      idx = index;
    }
  }
  if (highestMark === 0) return studentList[0];

  return studentList[idx];
}
const studentList = [
  { id: 1, name: 'Alice', math: 9 },
  { id: 2, name: 'Bob', math: 8 },
  { id: 3, name: 'John', math: 9 },
];
console.log(findStudentHavingHighestMark(studentList));
