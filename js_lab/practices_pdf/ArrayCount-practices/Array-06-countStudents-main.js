function countStudents(studentList, avgMark) {
  //validate args
  if (!Array.isArray(studentList) || studentList.length === 0 || typeof avgMark !== 'number')
    return 0;

  let countKey;
  for (let index = 0; index < studentList.length; index++) {
    if (typeof studentList[index] !== 'object') return 0;

    if (!'marks' in studentList[index]) return 0;

    if (typeof studentList[index]['marks'] !== 'object') return 0;

    if (countKey === undefined) countKey = Object.keys(studentList[index]['marks']).length;

    if (Object.keys(studentList[index]['marks']).length !== countKey) return 0;

    if (Object.values(studentList[index]['marks']).some((mark) => mark < 0)) return 0;
  }

  //process
  return studentList.reduce((count, currentStudent) => {
    const valueMarks = Object.values(currentStudent.marks);

    if (caculatorAvgMarks(valueMarks) >= avgMark) count += 1;

    return count;
  }, 0);
}

function caculatorAvgMarks(marks) {
  return marks.reduce((mark, currentMark, index) => {
    mark += currentMark;

    if (index === marks.length - 1) return mark / marks.length;

    return mark;
  }, 0);
}

const studentList = [
  { id: 1, name: 'Alice', marks: { math: 5, english: 9 } },
  { id: 2, name: 'Bob', marks: { math: 9, english: 9 } },
];

console.log(countStudents(studentList, 5));
