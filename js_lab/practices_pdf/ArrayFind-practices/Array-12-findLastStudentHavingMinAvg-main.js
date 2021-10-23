function findLastStudentHavingMinAvg(studentList) {
  //validate args
  if (!Array.isArray(studentList) || studentList.length === 0) return undefined;

  for (let index = 0; index < studentList.length; index++) {
    if (typeof studentList[index] !== 'object') return undefined;

    if (!'math' in studentList[index] || !'english' in studentList[index]) return undefined;

    if (
      typeof studentList[index]['math'] !== 'number' ||
      typeof studentList[index]['english'] !== 'number'
    )
      return undefined;
  }

  //process
  let minAvg = (studentList[0]['math'] + studentList[0]['english']) / 2;
  let idx = 0;
  for (let index = 0; index < studentList.length; index++) {
    const avg = (studentList[index]['math'] + studentList[index]['english']) / 2;
    if (minAvg >= avg) {
      minAvg = avg;
      idx = index;
    }
  }

  return studentList[idx];
}

const studentList = [
  { id: 1, name: 'Alice', math: 6, english: 5 },
  { id: 2, name: 'Bob', math: 5, english: 6 },
  { id: 3, name: 'John', math: 6, english: 5 },
];

console.log(findLastStudentHavingMinAvg(studentList));
