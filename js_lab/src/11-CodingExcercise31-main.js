function countStudents(studentList) {
  //validate args
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;

  for (let index = 0; index < studentList.length; index++) {
    if (typeof studentList[index] !== 'object') return 0;
  }

  //process

  const count = studentList.reduce((countMale, student) => {
    if (student['gender'] === 'male') {
      return countMale + 1;
    } else {
      return countMale;
    }
  }, 0);

  return count;
}

console.log(
  countStudents([
    { id: 1, gender: 'female' },
    { id: 2, gender: 'male' },
  ])
);
