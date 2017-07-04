export default class UserDetails {
  _fullName;
  _userName;
  _email;

  constructor(fullName, userName, email) {
    this._fullName = fullName;
    this._userName = userName;
    this._email = email;
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
}
