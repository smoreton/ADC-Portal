export default class ServiceCategory {
  _id;
  _logoSource;
  _serviceTypeCategory;
  _serviceCategoryColor;

  constructor(id, logoSource, serviceTypeCategory, serviceCategoryColor) {
    this._id = id;
    this._logoSource = logoSource;
    this._serviceTypeCategory = serviceTypeCategory;
    this._serviceCategoryColor = serviceCategoryColor;
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

  get serviceCategoryColor() {
    return this._serviceCategoryColor;
  }
}
