/**
 * Class to represent a service that has been selected by the user
 */
export default class SelectedService {
  _service;
  _title;
  _businessUnit;
  _userRange;

  constructor(service, title, businessUnit, userRange) {
    this._service = service;
    this._title = title;
    this._businessUnit = businessUnit;
    this._userRange = userRange;
  }

  get serviceName() {
    console.log(this._title);
    console.log(this._service.title);
    console.log(this._service._title);
    return this._title;
  }

  get businessUnit() {
    return this._businessUnit;
  }

  get userRange() {
    return this._userRange;
  }

  get serviceCost() {
    return this._service.pricing[this._userRange];
  }
}
