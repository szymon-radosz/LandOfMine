import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import Alert from "./../Alert";

describe("<Alert />", () => {
    const wrapper = shallow(<Alert message="test message" status="success" />);

    it("renders html element", () => {
        expect(wrapper.find(".alert")).toHaveLength(1);
        expect(wrapper.find(".alert")).not.toHaveLength(2);
        expect(wrapper.find(".alert-success")).toHaveLength(1);
        expect(wrapper.text()).toMatch(/test message/);
        expect(wrapper.text()).not.toMatch(/test message 233232/);
    });
});
