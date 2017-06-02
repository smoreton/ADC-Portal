export default class Issues {
  _dateTime;
  _header;
  _description;

  constructor(dateTime, header, description) {
    this._dateTime = dateTime + "";
    this._header = header + "";
    this._description = description + "";
  }

  get dateTime() {
    return this._dateTime;
  }

  get header() {
    return this._header;
  }

  get description() {
    return this._description;
  }
}
