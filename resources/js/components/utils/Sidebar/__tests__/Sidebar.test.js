import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import Sidebar from "./../Sidebar";

describe("<Sidebar />", () => {
    const wrapper = shallow(<Sidebar />);

    it("renders html element", () => {
        expect(wrapper.find(".sidebar")).toHaveLength(1);
        expect(wrapper.find(".sidebar")).not.toHaveLength(2);
        expect(wrapper.find("ul")).toHaveLength(1);
        expect(wrapper.find("li")).toHaveLength(7);
    });
});
