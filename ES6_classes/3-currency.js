/**
 * Represents a currency.
 * @class
 */
export default class Currency {

  constructor(code, name) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error('Both name and code must be strings.');
    }
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    }
  }

  displayFullCurrency() {
  return `${this._code} (${this._name})`;
  }
}
