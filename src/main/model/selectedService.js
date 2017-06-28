/**
 * Class to represent a service that has been selected by the user
 */
export default class SelectedService {
  _service;
  _businessUnit;
  _userRange;

  constructor(service, businessUnit, userRange) {
    this._service = service;
    this._businessUnit = businessUnit;
    this._userRange = userRange;
  }

  get serviceName() {
    return this._service.serviceTitle;
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