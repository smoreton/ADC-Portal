export default class ProjectDetails {
  _projectName;
  _projectCode;
  _ownerEmail;
  _projectJustification;

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

  get projectJustification() {
    return this._projectJustification;
  }

  set enteredProjectJustification(value) {
    this._projectJustification = value;
  }
}
