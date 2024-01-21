/**
 * Represents a currency.
 * @class
 */
export default class Currency {

    /**
     * Constructor for the Currency class.
     * @param {string} name - The name of the currency.
     * @param {string} code - The code of the currency.
     */
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  
    /**
     * Get the name of the currency.
     * @returns {string} - The name of the currency.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Set the name of the currency.
     * @param {string} name - The new name for the currency.
     */
    set name(name) {
      if (typeof(name) === 'string') {
        this._name = name;
      }
    }
  
    /**
     * Get the code of the currency.
     * @returns {string} - The code of the currency.
     */
    get code() {
      return this._code;
    }
  
    /**
     * Set the code of the currency.
     * @param {string} code - The new code for the currency.
     */
    set code(code) {
      if (typeof(code) === 'string') {
        this._code = code;
      }
    }
  
    /**
     * Display the full representation of the currency.
     * @returns {string} - A formatted string containing the name and code of the currency.
     */
    displayFullCurrency() {
      return `${this.name} (${this._code})`;
    }
  }
  