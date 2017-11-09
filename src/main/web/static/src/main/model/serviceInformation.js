export default class ServiceInformation {
  _id;
  _category;
  _dateTime;
  _header;
  _description;

  constructor(id, category, dateTime, header, description) {
    this._id = id;
    this._category = category;
    this._dateTime = dateTime;
    this._header = header;
    this._description = description;
  }

  get id() {
    return this._id;
  }

  get category() {
    return this._category;
  }

  serviceInformationCategory() {
    return this._category;
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
