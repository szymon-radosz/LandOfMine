import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import TopBar from "./../TopBar";

describe("<TopBar />", () => {
    const wrapper = shallow(<TopBar />);

    it("renders html element", () => {
        expect(wrapper.find(".navbar")).toHaveLength(1);
        expect(wrapper.find(".navbar")).not.toHaveLength(2);
        expect(wrapper.find(".navbar-toggler")).toHaveLength(1);
        expect(wrapper.find(".navbar-collapse")).toHaveLength(1);
        expect(wrapper.find(".navbar-right")).toHaveLength(1);
        expect(wrapper.find(".logout-icon")).toHaveLength(1);
        expect(wrapper.find(".menu-icon")).toHaveLength(1);
    });
});
