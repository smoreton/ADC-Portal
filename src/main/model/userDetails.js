export default class UserDetails {
  _fullName;
  _userName;
  _email;
  _userServices;

  constructor(fullName, userName, email, userServices) {
    this._fullName = this.validateField(fullName);
    this._userName = this.validateField(userName);
    this._email = this.validateField(email);
    this._userServices = this.validateField(userServices);
  }

  get userFullName() {
    return this._fullName;
  }

  set enteredUserFullName(fullName) {
    this._fullName = fullName;
  }

  get userName() {
    return this._userName;
  }

  get userEmail() {
    return this._email;
  }

  get userServices() {
    return this._userServices;
  }

  validateField = value => {
    if (value) {
      return value;
    } else {
      throw new Error(
        "Validation fail: Empty value included in UserDetails creation"
      );
    }
  };
}
