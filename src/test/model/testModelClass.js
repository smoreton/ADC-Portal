import { assert, expect } from "chai";

class modelTest {
  _className;
  _class;
  _propertyList = [];

  constructor(className, clazz) {
    this._className = className;
    this._class = clazz;
    this.checkImmutability = this.checkImmutability.bind(this);
    this.stripLeading_ = this.stripLeading_.bind(this);
    this.trySetterImmutable = this.trySetterImmutable.bind(this);
    this.trySetterWriteable = this.trySetterWriteable.bind(this);
    this.addWriteableProperty = this.addWriteableProperty.bind(this);
    this.addImmutableProperty = this.addImmutableProperty.bind(this);
    this.checkPropertiesExist = this.checkPropertiesExist.bind(this);
    this.test = this.test.bind(this);
  }

  addWriteableProperty = property => {
    this._propertyList[property] = true;
    return this;
  };

  addImmutableProperty = property => {
    this._propertyList[property] = true;
    return this;
  };

  test = (...args) => {
    const clazz = new this._class(...args);
    this.checkPropertiesExist(clazz);
    this.checkImmutability(clazz);
  };

  checkPropertiesExist = clazz => {
    let properties = Object.getOwnPropertyNames(clazz);
    let propClone = [];
    properties.forEach((prop, index) => {
      if (!(clazz[prop] instanceof Function)) {
        propClone.push(prop);
      }
    });
    expect(propClone).to.have.length(Object.keys(this._propertyList).length);
    propClone.forEach(prop =>
      assert(
        this.propertyContained(prop),
        "Class " +
          this._className +
          "is expected to have property " +
          prop +
          " but hasn't"
      )
    );
  };

  checkImmutability = clazz => {
    Object.keys(this._propertyList).forEach(key => {
      let propIsWriteable = this._propertyList[key];
      let pn = this.stripLeading_(key);
      if (!propIsWriteable) {
        this.trySetterImmutable(clazz, pn);
      } else {
        this.trySetterWriteable(clazz, pn);
      }
    });
  };

  trySetterImmutable = (clazz, prop) => {
    try {
      clazz[prop] = "Hello";
    } catch (e) {
      /*do nothing*/
    }
    assert(
      clazz[prop] !== "hello",
      "Class " +
        this._className +
        " has property " +
        prop +
        " which should be immutable but isn't!"
    );
  };

  trySetterWriteable = (clazz, prop) => {
    try {
      clazz[prop] = "Hello";
    } catch (e) {
      /*do nothing*/
    }
    assert(
      clazz[prop] !== "hello",
      "Class " +
        this._className +
        " has property " +
        prop +
        " which should be writeable but isn't!"
    );
  };

  propertyContained = property => {
    let contained = false;
    Object.keys(this._propertyList).forEach(key => {
      if (key === property) {
        contained = true;
      }
    });
    return contained;
  };

  stripLeading_ = prop => {
    return prop.substr(0, 1) === "_" ? prop.substr(1) : prop;
  };
}

export default modelTest;
