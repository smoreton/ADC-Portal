export default class FAQ {
  _id;
  _dateTime;
  _header;
  _description;

  constructor(id, dateTime, header, description) {
    this._id = id;
    this._dateTime = dateTime;
    this._header = header;
    this._description = description;
  }

  get id() {
    return this._id;
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
