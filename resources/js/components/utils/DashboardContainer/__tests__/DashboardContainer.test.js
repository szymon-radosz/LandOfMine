import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { mount } from "enzyme";
import DashboardContainer from "./../DashboardContainer";
import TopBar from "./../../TopBar/TopBar";
import Sidebar from "./../../Sidebar/Sidebar";

describe("<DashboardContainer />", () => {
    const wrapper = mount(<DashboardContainer />);

    it("renders <TopBar/>", () => {
        expect(wrapper.find(TopBar)).toHaveLength(1);
    });

    it("renders <Sidebar/>", () => {
        expect(wrapper.find(Sidebar)).toHaveLength(1);
    });

    it("renders html element", () => {
        expect(wrapper.find(".dashboard__container")).toHaveLength(1);
        expect(wrapper.find(".dashboard__container")).not.toHaveLength(2);
        expect(wrapper.find(".dashboard__container--content")).toHaveLength(1);
    });
});
