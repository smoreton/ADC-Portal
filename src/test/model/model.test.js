import Contact from "../../main/model/contact";
import DropDownData from "../../main/model/dropDownData";
import NetworkDetailsModel from "../../main/model/networkDetailsModel";
import ProjectDetails from "../../main/model/projectDetails";
import SelectedService from "../../main/model/selectedService";
import ServiceCategory from "../../main/model/serviceCategory";
import ServiceInformation from "../../main/model/serviceInformation";
import UserDetails from "../../main/model/userDetails";
import Service from "../../main/model/service";
import { assert, expect } from "chai";
import TestClazz from "./testModelClass";

/**
 * This test will check model classes
 * A class is assumed to be a standard POJO
 * If any property has a get or set method it is visible to this test.
 * If a propert has a set method it is writeable (check as  addWriteable(propertyName).
 *  but if it has not set method it is immutable (check as addImmutable(propertyname).
 *  The property name is as defined in the class, not as the method name.
 */

describe("Contact test: ", () => {
  it("Contact has consistent properties", () => {
    let tc = new TestClazz("Contact", Contact)
      .addImmutableProperty("_firstName")
      .addImmutableProperty("_surname")
      .addImmutableProperty("_email")
      .addImmutableProperty("_telephone");
    tc.test();
  });
});

describe("DropDownData test: ", () => {
  it("DropDownData has consistent properties", () => {
    let dd = new TestClazz("dropDownData", DropDownData)
      .addImmutableProperty("_dropDownId")
      .addImmutableProperty("_dropDownKey")
      .addImmutableProperty("_dropDownValue");
    dd.test();
  });
});

describe("NetworkDetailsModel test: ", () => {
  it("NetworkDetailsModel has consistent properties", () => {
    let nd = new TestClazz("NetworkDetailsModel", NetworkDetailsModel)
      .addWriteableProperty("_ownerEmail")
      .addWriteableProperty("_justification");
    nd.test();
  });
});

describe("ProjectDetails test: ", () => {
  it("ProjectDetails has consistent properties", () => {
    let pd = new TestClazz("ProjectDetails", ProjectDetails)
      .addWriteableProperty("_projectName")
      .addWriteableProperty("_projectCode")
      .addWriteableProperty("_ownerEmail");
    pd.test();
  });
});

describe("SelectedService test: ", () => {
  it("SelectedService has consistent properties", () => {
    let ss = new TestClazz("SelectedService", SelectedService)
      .addWriteableProperty("_service")
      .addWriteableProperty("_businessUnit")
      .addWriteableProperty("_userRange");
    ss.test();
  });
});

describe("Service test: ", () => {
  it("Service has consistent properties", () => {
    let s = new TestClazz("Service", Service)
      .addImmutableProperty("_serviceId")
      .addImmutableProperty("_title")
      .addImmutableProperty("_logoSource")
      .addImmutableProperty("_description")
      .addImmutableProperty("_category")
      .addImmutableProperty("_starRating")
      .addImmutableProperty("_pricing");
    s.test();
  });
});

describe("ServiceCategory test: ", () => {
  it("ServiceCategory has consistent properties", () => {
    let s = new TestClazz("ServiceCategory", ServiceCategory)
      .addImmutableProperty("_id")
      .addImmutableProperty("_logoSource")
      .addImmutableProperty("_serviceTypeCategory")
      .addImmutableProperty("_serviceCategoryColor");
    s.test();
  });
});

describe("ServiceInformation test: ", () => {
  it("ServiceInformation has consistent properties", () => {
    let s = new TestClazz("ServiceInformation", ServiceInformation)
      .addImmutableProperty("_id")
      .addImmutableProperty("_dateTime")
      .addImmutableProperty("_category")
      .addImmutableProperty("_header")
      .addImmutableProperty("_description");
    s.test();
  });
});

describe("UserDetails test: ", () => {
  it("UserDetails has consistent properties", () => {
    let s = new TestClazz("UserDetails", UserDetails)
      .addImmutableProperty("_fullName")
      .addImmutableProperty("_userName")
      .addImmutableProperty("_email")
      .addImmutableProperty("_userServices");
    s.test("John", "Doe", "j.doe@doe@doe.com", { hello: 1 });
  });
});
