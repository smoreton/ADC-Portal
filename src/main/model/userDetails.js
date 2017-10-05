export default class UserDetails {
  _fullName;
  _userName;
  _email;
  _userServices;

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
  //
  // validateField = value => {
  //       if (value) {
  //           return value;
  //       } else {
  //           throw new Error(
  //               "Validation fail: Empty value included in UserDetails creation"
  //           );
  //       }
  //   };
}
