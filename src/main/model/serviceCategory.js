export default class ServiceCategory {
  _logoSource;
  _serviceTypeCategory;

  constructor(logoSource, serviceTypeCategory) {
    this._logoSource = logoSource;
    this._serviceTypeCategory = serviceTypeCategory;
  }

  get logoSource() {
    return this._logoSource;
  }

  get serviceTypeCategory() {
    return this._serviceTypeCategory;
  }
}
