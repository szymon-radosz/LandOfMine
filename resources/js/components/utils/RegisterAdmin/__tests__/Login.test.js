import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { mount, shallow } from "enzyme";
import sinon from "sinon";
import Login from "./../Login";
import LoginForm from "./../LoginForm/LoginForm";

describe("<Login />", () => {
    const wrapper = mount(<Login />);

    it("renders <LoginForm /> components", () => {
        //console.log(wrapper.debug());
        expect(wrapper.find(LoginForm)).toHaveLength(1);
    });

    it("renders html element", () => {
        expect(wrapper.find("div.login-form__container")).toHaveLength(1);
        expect(wrapper.find("div.login-form__container")).not.toHaveLength(2);
        expect(wrapper.find("input")).toHaveLength(2);
        expect(wrapper.find(".login-form")).toHaveLength(1);
        expect(wrapper.find(".btn")).toHaveLength(1);
    });

    it("submit event when click submit", () => {
        const onButtonClick = sinon.spy();
        const wrapper = shallow(<LoginForm onLoginSubmit={onButtonClick} />);
        wrapper.find("button").simulate("click");
        expect(onButtonClick.called).toBeTruthy();
        expect(onButtonClick.calledOnce).toBeTruthy();
    });
});
