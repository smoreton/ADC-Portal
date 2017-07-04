export default class ProjectDetails {
  _projectName;
  _projectCode;
  _ownerEmail;

  get projectName() {
    return this._projectName;
  }

  set enteredProjectName(value) {
    this._projectName = value;
  }

  get projectCode() {
    return this._projectCode;
  }

  set enteredProjectCode(value) {
    return this._projectCode;
  }

  get ownerEmail() {
    return this._ownerEmail;
  }

  set enteredOwnerEmail(value) {
    this._ownerEmail = value;
  }
}
