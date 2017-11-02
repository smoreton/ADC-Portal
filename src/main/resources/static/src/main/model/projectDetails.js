export default class ProjectDetails {
  _projectName = "";
  _projectCode = "";
  _ownerEmail = "";
  _projectJustification;

  constructor(projectName, projectCode, ownerEmail) {
    this._projectName = projectName;
    this._projectCode = projectCode;
    this._ownerEmail = ownerEmail;
  }

  get projectName() {
    return this._projectName;
  }

  set projectName(value) {
    this._projectName = value;
  }

  get projectCode() {
    return this._projectCode;
  }

  set projectCode(value) {
    return (this._projectCode = value);
  }

  get ownerEmail() {
    return this._ownerEmail;
  }

  set ownerEmail(value) {
    this._ownerEmail = value;
  }

  enteredProjectName = value => {
    this.projectName = value;
  };

  enteredProjectCode = value => {
    this.projectCode = value;
  };

  enteredOwnerEmail = value => {
    this.ownerEmail = value;
  };
}
