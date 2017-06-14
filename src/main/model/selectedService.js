/**
 * Class to represent a service that has been selected by the user
 */
export default class SelectedService {
  _serviceName;
  _businessUnit;
  _userRange;
  _cost;

  constructor(serviceName, businessUnit, userRange, cost) {
    this._serviceName = serviceName;
    this._businessUnit = businessUnit;
    this._userRange = userRange;
    this._cost = cost;
  }

  get serviceName() {
    return this._serviceName;
  }

  get businessUnit() {
    return this._businessUnit;
  }

  get userRange() {
    return this._userRange;
  }

  get cost() {
    return this._cost;
  }
}
