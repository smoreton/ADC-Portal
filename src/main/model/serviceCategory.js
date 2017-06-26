export default class ServiceCategory {
  _id;
  _logoSource;
  _serviceTypeCategory;

  constructor(id, logoSource, serviceTypeCategory) {
    this._id = id;
    this._logoSource = logoSource;
    this._serviceTypeCategory = serviceTypeCategory;
  }

  get serviceCategoryId() {
    return this._id;
  }

  get logoSource() {
    return this._logoSource;
  }

  get serviceTypeCategory() {
    return this._serviceTypeCategory;
  }
}
