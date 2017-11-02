/**
 * Created by CSHEFIK on 19/05/2017.
 */

export default class Contact {
  _firstName;
  _surname;
  _email;
  _telephone;

  constructor (
    firstName,
    surname,
    email,
    telephone
  ) {
    this._firstName = firstName;
    this._surname = surname;
    this._email = email;
    this._telephone = telephone;
  }

  get firstName() {
    return this._firstName;
  }

  get surname() {
    return this._surname;
  }

  get email() {
    return this._email;
  }

  get telephone() {
    return this._telephone;
  }
}
