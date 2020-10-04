import React from "react";
import { shallow } from "enzyme";
import jest from "jest-mock";

import Notification from "./index";
import data from "../../Store/Notifications/data";

describe("Notification", () => {
  it("component should render without crashing", () => {
    const component = shallow(<Notification data={data} />);
    expect(component).toMatchSnapshot();
  });

  it("mark all read button will mark all notifications as read", () => {
    const cbClick = jest.fn();
    const component = shallow(
      <Notification data={data} markAllRead={cbClick} />
    );
    component.find('[data-testid="btn-markallread"]').simulate("click");
    expect(cbClick).toHaveBeenCalled();
  });

  it("mark all read function gets called only once", () => {
    const cbClick = jest.fn();
    const component = shallow(
      <Notification data={data} markAllRead={cbClick} />
    );
    component.find('[data-testid="btn-markallread"]').simulate("click");
    expect(cbClick).toHaveBeenCalledTimes(1);
  });
});
