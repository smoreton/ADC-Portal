export default class UserDetails {
  _fullName;
  _userName;
  _email;
  _userServices;
  _validationFail;

  constructor(fullName, userName, email, userServices) {
    this._fullName = fullName;
    this._userName = userName;
    this._email = email;
    this._userServices = userServices;
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

  get validationFailure() {
    return this._validationFail;
  }

  validateField = value => {
    console.log(value);
    if (value) {
      this._validationFail = true;
    } else {
      this._validationFail = false;
    }
    return value;
  };
}
