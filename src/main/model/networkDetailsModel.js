/**
 * Created by SCMORETO on 04/09/2017.
 */
export default class NetworkDetailsModel {
  _ownerEmail;
  _justification;

  constructor(ownerEmail, justification) {
    this._ownerEmail = ownerEmail;
    this._justification = justification;
  }

  get justification() {
    return this._justification;
  }

  set justification(value) {
    return (this._justification = value);
  }

  get ownerEmail() {
    return this._ownerEmail;
  }

  set ownerEmail(value) {
    this._ownerEmail = value;
  }

  enteredOwnerEmail = value => {
    this.ownerEmail = value;
  };

  enteredJustification = value => {
    this.justification = value;
  };
}
