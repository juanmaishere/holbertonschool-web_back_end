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
  }

    // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new Error('Invalid type for attribute "name". Expected a string.');
    }
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new Error('Invalid type for attribute "length". Expected a number.');
    }
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) && value.every(student => typeof student === 'string')) {
      this._students = value;
    } else {
      throw new Error('Invalid type for attribute "students". Expected an array of strings.');
    }
  }
}
  