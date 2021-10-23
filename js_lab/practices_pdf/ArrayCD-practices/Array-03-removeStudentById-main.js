function removeStudentById(studentList, studentId) {
  //validate args
  if (!Array.isArray(studentList) || studentList.length === 0 || typeof studentId !== 'number')
    return [];

  for (let index = 0; index < studentList.length; index++) {
    if (typeof studentList[index] !== 'object') return [];

    if (!'id' in studentList[index]) return [];

    if (typeof studentList[index]['id'] !== 'number');
  }

  //process
  const cloneStudentList = [...studentList];

  const idx = cloneStudentList.findIndex((student) => student.id === studentId);

  if (idx === -1) return cloneStudentList;

  cloneStudentList.splice(idx, 1);
  return cloneStudentList;
}

const studentList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Pham' },
  { id: 4, name: 'Minh' },
  { id: 5, name: 'Nguyen' },
];

console.log(removeStudentById(studentList, 0));
