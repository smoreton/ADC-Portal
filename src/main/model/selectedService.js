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

  get service() {
    return this._service;
  }

  get businessUnit() {
    return this._businessUnit;
  }

  get userRange() {
    return this._userRange;
  }

  get serviceCost() {
    //TODO: calculate service cost using pricings from service obj && user range
    return null;
  }
}
