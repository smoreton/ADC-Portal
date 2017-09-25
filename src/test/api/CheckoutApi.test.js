import { expect, assert } from "chai";
import React from "react";
import ApiUtility from "../../main/utils/ApiPostUtil";

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
let APIResponse;

describe("Sends POST to API", () => {
  it("POST IS SUCCESSFUL", () => {
    return ApiUtility.postCheckoutSummary(
      projectDetails,
      selectedServices,
      userList,
      networkDetails
    ).then(result => {
      APIResponse = result;
      console.log("The Result is: " + APIResponse);
      expect(result).to.equal(200);
    });
  });
});
