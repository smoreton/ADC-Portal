import { expect, assert } from "chai";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import HomePage from "../../main/components/HomePage";
import DescriptionCard from "../../main/components/DescriptionCard";
import CardListing from "../../main/components/CardListing";
import ServiceCategories from "../../main/components/CategoriesTileComponent";
import Carousel from "../../main/components/CarouselComponent";

describe("HomePage Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const descriptionContent = "description text";

  const carouselArray = [
    {
      id: 1,
      title: "Coming Soon",
      dateTime: "1st June 2017",
      header: "Jira",
      description: "Jira to be launched"
    },
    {
      id: 2,
      title: "Maintenance",
      dateTime: "2nd June 2017",
      header: "Jira downtime",
      description: "Jira will be updated"
    },
    {
      id: 3,
      title: "Coming Soon",
      dateTime: "21st June 2017",
      header: "Confluence",
      description: "Confluence to be launched"
    },
    {
      id: 4,
      title: "Maintenance",
      dateTime: "22nd June 2017",
      header: "Confluence downtime",
      description: "Confluence will be updated"
    }
  ];

  const serviceDetail = [
    {
      logoSource:
        "https://cdn.pixabay.com/photo/2014/08/14/10/38/software-417880_960_720.jpg",
      category: "Tools/Software"
    },
    {
      logoSource: "http://www.necomputersolutions.com/images/itsupport.jpg",
      category: "Infrastructure"
    },
    {
      logoSource:
        "http://cs.umw.edu/~finlayson/class/fall12/cpsc110/notes/images/net.jpg",
      category: "Networks"
    }
  ];

  it("renders the correct components", () => {
    const wrapper = shallow(
      <HomePage
        description={descriptionContent}
        carouselData={carouselArray}
        serviceDetails={serviceDetail}
      />,
      { context: context, childContextTypes: childContextTypes }
    );
    expect(
      wrapper.contains(<DescriptionCard description={descriptionContent} />)
    ).to.equal(true);
    expect(wrapper.contains(<Carousel carousel={carouselArray} />)).to.equal(
      true
    );
    expect(wrapper.find(Carousel)).to.have.length(1);
    expect(
      wrapper.contains(<ServiceCategories categories={serviceDetail[0]} />)
    ).to.equal(true);
    expect(
      wrapper.contains(<ServiceCategories categories={serviceDetail[1]} />)
    ).to.equal(true);
    expect(
      wrapper.contains(<ServiceCategories categories={serviceDetail[2]} />)
    ).to.equal(true);
  });

  it("contains correct number of DescriptionCard components", () => {
    const wrapper = mount(
      <MemoryRouter>
        <HomePage
          description={descriptionContent}
          carouselData={carouselArray}
          serviceDetails={serviceDetail}
        />
      </MemoryRouter>,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(DescriptionCard)).to.have.length(1);
  });

  it("contains correct number of CardListing components", () => {
    const wrapper = mount(
      <MemoryRouter>
        <HomePage
          description={descriptionContent}
          carouselData={carouselArray}
          serviceDetails={serviceDetail}
        />
      </MemoryRouter>,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(CardListing)).to.have.length(6);
  });

  it("contains the correct number of service category components", () => {
    const wrapper = mount(
      <MemoryRouter>
        <HomePage
          description={descriptionContent}
          carouselData={carouselArray}
          serviceDetails={serviceDetail}
        />
      </MemoryRouter>,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(ServiceCategories)).to.have.length(
      serviceDetail.length
    );
  });
});
