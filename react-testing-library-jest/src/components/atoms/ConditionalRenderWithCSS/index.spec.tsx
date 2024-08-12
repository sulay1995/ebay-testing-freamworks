import React from "react";
import ToggledDiv from "./index";

describe("<ToggledDiv />", () => {
  it("should toggle the visibility of the <p> element when the button is clicked", () => {
    const wrapper = shallow(<ToggledDiv />);

    // Initially, the <p> element should have the "hide" class
    expect(wrapper.find("p").hasClass("hide")).to.be.true;
    expect(wrapper.find("p").hasClass("show")).to.be.false;

    // Simulate a button click
    wrapper.find("button").simulate("click");

    // After one click, the <p> element should have the "show" class
    expect(wrapper.find("p").hasClass("show")).to.be.true;
    expect(wrapper.find("p").hasClass("hide")).to.be.false;

    // Simulate another button click
    wrapper.find("button").simulate("click");

    // After the second click, the <p> element should have the "hide" class again
    expect(wrapper.find("p").hasClass("hide")).to.be.true;
    expect(wrapper.find("p").hasClass("show")).to.be.false;
  });
});
