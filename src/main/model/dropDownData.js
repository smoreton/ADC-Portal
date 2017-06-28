export default class DropDownData {
  _key;
  _value;

  constructor(key, value) {
    this._key = key;
    this._value = value;
  }

  get dropDownKey() {
    return this._key;
  }

  get dropDownValue() {
    return this._value;
  }
}
