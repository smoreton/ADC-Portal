/**
 * Class to represent a service that has been selected by the user
 */
export default class SelectedService {
  _service;
  _businessUnit;
  _userRange;

  constructor(service, userRange, businessUnit) {
    this._service = service;
    this._userRange = userRange;
    this._businessUnit = businessUnit;
  }

  get service() {
    return this._service;
  }

  get serviceName() {
    return this._service.serviceTitle;
  }

  get serviceLogo() {
    return this._service.logoSource;
  }

  get serviceCategory() {
    return this._service.category;
  }

  get businessUnit() {
    return this._businessUnit;
  }

  set businessUnit(value) {
    this._businessUnit = value;
  }

  get userRange() {
    return this._userRange;
  }

  set userRange(value) {
    this._userRange = value;
  }

  get serviceCost() {
    return this._service.pricing[this._userRange];
  }
}
