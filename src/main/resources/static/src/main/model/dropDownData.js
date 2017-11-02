export default class DropDownData {
  _dropDownId;
  _dropDownKey;
  _dropDownValue;

  constructor(id, key, value) {
    this._dropDownId = id;
    this._dropDownKey = key;
    this._dropDownValue = value;
  }

  get dropDownId() {
    return this._dropDownId;
  }

  get dropDownKey() {
    return this._dropDownKey;
  }

  get dropDownValue() {
    return this._dropDownValue;
  }
}
