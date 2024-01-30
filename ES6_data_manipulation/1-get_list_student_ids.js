export default function getListStudents(students) {
  const ids = students()
  if (ids === null && ids.length === 0) {
    return []
  }
  const id = ids.map((dicts) => (dicts.id))
  return id
}
