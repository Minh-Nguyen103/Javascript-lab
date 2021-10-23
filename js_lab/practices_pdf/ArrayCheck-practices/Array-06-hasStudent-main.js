function hasStudent(studentList, studentId) {
  //validate args
  if (!Array.isArray(studentList) || typeof studentId !== 'number' || studentList.length === 0)
    return false;

  if (studentList.some((student) => typeof student !== 'object')) return false;

  for (let index = 0; index < studentList.length; index++) {
    if (typeof studentList[index] !== 'object') return false;

    if (!('id' in studentList[index])) return false;

    if (typeof studentList[index]['id'] !== 'number') return false;
  }

  //process
  for (let index = 0; index < studentList.length; index++) {
    if (studentList[index]['id'] === studentId) return true;
  }

  return false;
}

const studentList = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
];

console.log(hasStudent(studentList, 1));
