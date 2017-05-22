/**
 * Created by CSHEFIK on 19/05/2017.
 */

export default class Service {
  _serviceId;
  _title;
  _description;

  constructor (
      serviceId,
      title,
      description
  ) {
    this._serviceId = serviceId;
    this._title = title;
    this._description = description;
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
}
