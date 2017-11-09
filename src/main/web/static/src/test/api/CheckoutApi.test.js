import { expect, assert } from "chai";
import React from "react";
import ApiUtility from "../../src/main/utils/ApiPostUtil";

let projectDetails = { projectDetails: {} };
let networkDetails = { networkDetails: {} };
let selectedServices = [
  {
    _service: {
      serviceTitle: "Jira",
      logoSource: "img/Jira.png",
      description:
        "JIRA provides a variety of tools and functionality for planning and delivery of agile projects. It includes scrum boards, Kanban boards, agile reporting, customisable workflows & agile roadmap planning",
      category: "Tools/Software",
      starRating: 4
    },
    userRange: "",
    businessUnit: ""
  },

  {
    _service: {
      serviceTitle: "Confluence",
      logoSource: "/img/confluence_logo.jpg",
      description:
        "Create, edit and collaborate on meeting notes, project plans, product requirements and more. Includes multimedia, dynamic content & integration with JIRA reporting ",
      category: "Tools/Software",
      starRating: 5
    },
    userRange: "",
    businessUnit: ""
  }
];

let userList = { userList: [{ username: "brad" }, { username: "lilly" }] };

describe("Sends POST to API", () => {
  let originalTimeout;

  beforeEach(()=> {
    originalTimeout=jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL= 10000;
  });

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL=originalTimeout;
  });

  it("POST IS SUCCESSFUL", () => {
    return ApiUtility.postCheckoutSummary(
      projectDetails,
      selectedServices,
      userList,
      networkDetails
    ).then(result => {
      expect(result.statusCode).to.equal(200);
    });
  });
});
