function findAllStudents(studentList) {
  //validate args
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  for (let index = 0; index < studentList.length; index++) {
    if (typeof studentList[index] !== 'object') return [];

    if (!'math' in studentList[index]) return [];

    if (typeof studentList[index]['math'] !== 'number') return [];
  }

  //process
  return studentList.filter((student) => {
    if (student.math < 5) return true;
  });
}
const studentList = [
  { id: 1, name: 'Alice', math: 9 },
  { id: 2, name: 'Bob', math: 5 },
  { id: 3, name: 'John', math: 5 },
];
console.log(findAllStudents(studentList));
