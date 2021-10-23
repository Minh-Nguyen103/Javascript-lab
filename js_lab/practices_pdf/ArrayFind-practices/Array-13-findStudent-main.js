function findStudent(studentList) {
  //validate args
  if (!Array.isArray(studentList) || studentList.length === 0) return undefined;

  for (let index = 0; index < studentList.length; index++) {
    if (typeof studentList[index] !== 'object') return undefined;

    if (!'marks' in studentList[index]) return undefined;

    if (typeof studentList[index]['marks'] !== 'object') return undefined;
  }

  //process

  return studentList.find((student) => {
    let countHighMark = 0;
    const marksValue = Object.values(student.marks);

    marksValue.forEach((element) => {
      if (element >= 5) {
        countHighMark++;
      }
    });
    console.log(countHighMark);
    if (countHighMark === marksValue.length - 1) return true;

    return false;
  });
}

const studentList = [
  { id: 1, name: 'Alice', marks: { math: 9, programming: 4 } },
  { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
  { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
  { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
];

console.log(findStudent(studentList));
