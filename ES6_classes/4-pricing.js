import Currency from './3-currency.js';
/**
 * Represents a currency.
 * @class
 */
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  get amount() {
    return this._amount;
  }
  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    }
  }
  get currency() {
    return this._currency;
  }
  set currency(currency) {
    if (typeof currency === 'string') {
     this._currency = currency;
    }
  }
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`
  }
}