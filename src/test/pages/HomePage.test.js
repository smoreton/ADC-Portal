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

describe("HomePage Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const descriptionContent = "description text";

  const comingSoonContent = [
    {
      id: 1,
      dateTime: "Coming soon date",
      header: "Coming soon header",
      description: "Coming soon description"
    },
    {
      id: 2,
      dateTime: "Coming soon date 2",
      header: "Coming soon header 2",
      description: "Coming soon description 2"
    }
  ];

  const maintenanceContent = [
    {
      id: 1,
      dateTime: "Downtime date",
      header: "Downtime header",
      description: "Downtime description"
    },
    {
      id: 2,
      dateTime: "Downtime date 2",
      header: "Downtime header 2",
      description: "Downtime description 2"
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
        comingSoon={comingSoonContent}
        maintenance={maintenanceContent}
        serviceDetails={serviceDetail}
      />,
      { context: context, childContextTypes: childContextTypes }
    );
    expect(
      wrapper.contains(<DescriptionCard description={descriptionContent} />)
    ).to.equal(true);
    expect(
      wrapper.contains(<CardListing listItem={comingSoonContent[0]} />)
    ).to.equal(true);
    expect(
      wrapper.contains(<CardListing listItem={maintenanceContent[0]} />)
    ).to.equal(true);
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
          comingSoon={comingSoonContent}
          maintenance={maintenanceContent}
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
          comingSoon={comingSoonContent}
          maintenance={maintenanceContent}
          serviceDetails={serviceDetail}
        />
      </MemoryRouter>,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(CardListing)).to.have.length(2);
  });

  it("contains the correct number of service category components", () => {
    const wrapper = mount(
      <MemoryRouter>
        <HomePage
          description={descriptionContent}
          comingSoon={comingSoonContent}
          maintenance={maintenanceContent}
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

  //INVALID TESTS
  /**
    it("contains prop for description information", () => {
        const wrapper = mount(
            <MemoryRouter>
                <HomePage
                    description={descriptionContent}
                    comingSoon={comingSoonContent}
                    maintenance={maintenanceContent}
                    serviceDetails={serviceDetail}
                />
            </MemoryRouter>,
            {
                context,
                childContextTypes
            }
        );

        expect(wrapper.prop("description")).to.equal(descriptionContent);
    });

    it("contains prop for coming soon information", () => {
        const wrapper = mount(
            <MemoryRouter>
                <HomePage
                    description={descriptionContent}
                    comingSoon={comingSoonContent}
                    maintenance={maintenanceContent}
                    serviceDetails={serviceDetail}
                />
            </MemoryRouter>,
            {
                context,
                childContextTypes
            }
        );

        wrapper.setState({comingSoonIndex: 0});
        wrapper.setState({maintenanceIndex: 0});

        expect(wrapper.props().comingSoon).to.equal(comingSoonContent);
    });

    it("contains prop for maintenance information", () => {
        const wrapper = mount(
            <MemoryRouter>
                <HomePage
                    description={descriptionContent}
                    comingSoon={comingSoonContent}
                    maintenance={maintenanceContent}
                    serviceDetails={serviceDetail}
                />
            </MemoryRouter>,
            {context, childContextTypes}
        );

        wrapper.setState({comingSoonIndex: 0});
        wrapper.setState({maintenanceIndex: 0});

        expect(wrapper.props().maintenance).to.equal(maintenanceContent);
    });
     */
});
