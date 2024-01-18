/**
 * Represents a classroom.
 * @class
 */
export default class ClassRoom {
  /**
    * @constructor
    * @param {string} name - The name of the classroom.
    * @param {number} length - The length of the classroom (assuming this is a measurement).
    * @param {string[]} students - An array of student names in the classroom.
    */
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Invalid type for parameter "name". Expected a string.');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Invalid type for parameter "length". Expected a number.');
    }
    if (Array.isArray(students) && students.every(student => typeof student === 'string')) {
      this._students = students;
    } else {
      throw new Error('Invalid type for parameter "students". Expected an array of strings.');
    }
  };
  get name() {
    return this._name();
    }
  // Method
  set name(names) {
    if (typeof names === 'string') {
      this._name = names
    }
    }
  get lengths() {
    return this._number();
    }
  // Method
  set lengths(length) {
    if (typeof length === 'number') {
      this._name = length
    }
  }
  get students() {
    return this._students;
    }
  // Method
  set students(students) {
    this._students = students
    }
  };
