export default function getListStudentIds(studentsList) {
  if (Array.isArray(studentsList)) {
    return studentsList.map(student => {
      return student.id;
    });
  }
  return [];
}
