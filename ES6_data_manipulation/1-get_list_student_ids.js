export default function getListStudents(students) {
  if (students === null && students.length === 0) {
    return []
  }
  const ids = students.map((dicts) => (dicts.id))
  return ids
}
