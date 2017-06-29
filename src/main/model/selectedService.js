/**
 * Class to represent a service that has been selected by the user
 */
export default class SelectedService {
  _service;
  _businessUnit;
  _userRange;

  constructor(service) {
    this._service = service;
  }

  get serviceName() {
    return this._service.serviceTitle;
  }

  get businessUnit() {
    return this._businessUnit;
  }

  set selectedBusinessUnit(value) {
    this._businessUnit = value;
  }

  get userRange() {
    return this._userRange;
  }

  set selectedUserRange(value) {
    this._userRange = value;
  }

  get serviceCost() {
    return this._service.pricing[this._userRange];
  }
}
