export default class Service {
  _serviceId;
  _title;
  _description;
  _category;
  _starRating;
  _pricing;

  constructor(serviceId, title, description, category, starRating, pricing) {
    this._serviceId = serviceId;
    this._title = title;
    this._description = description;
    this._category = category;
    this._starRating = starRating;
    this._pricing = pricing;
  }

  get serviceId() {
    return this._serviceId;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get category() {
    return this._category;
  }

  get starRating() {
    return this._starRating;
  }

  get pricing() {
    return this._pricing;
  }
}
