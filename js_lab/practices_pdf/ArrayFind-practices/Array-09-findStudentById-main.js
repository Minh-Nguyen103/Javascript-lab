function findStudentById(studentList, studentId) {
  //validate args
  if (!Array.isArray(studentList) || studentList.length === 0 || typeof studentId !== 'number')
    return -1;

  if (studentList.some((student) => typeof student !== 'object')) return -1;
  for (let index = 0; index < studentList.length; index++) {
    if (typeof studentList[index] !== 'object') return -1;

    if (!'id' in studentList[index]) return -1;

    if (typeof studentList[index]['id'] !== 'number') return -1;
  }

  //process

  return studentList.findIndex((student) => student['id'] === studentId);
}
const studentList = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
];

console.log(findStudentById(studentList, 2));
