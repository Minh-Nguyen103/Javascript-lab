const CHECK_NAME = 'Alice';

function hasAlice(studentList) {
  //validate args
  if (!Array.isArray(studentList) || Object.keys(studentList).length === 0) return false;

  if (
    studentList.some((student) => {
      if (typeof student !== 'object') return true;

      if (!'name' in student || !'gender' in student) return true;

      if (typeof student['name'] !== 'string' || typeof student['gender'] !== 'string') return true;

      return false;
    })
  )
    return false;

  //process

  return studentList.some(
    (student) =>
      student.gender === 'female' && student.name.toLowerCase().trim() === CHECK_NAME.toLowerCase()
  );
}

const studentList = [
  { id: 1, name: 'Alice', gender: 'male' },
  { id: 2, name: 'aliCe', gender: 'female' },
  { id: 3, name: 'Easy Frontend', gender: 'male' },
];

console.log(hasAlice(studentList));
