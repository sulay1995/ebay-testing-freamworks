import React from "react";
import TypographyComponent from "./index";

describe("TypographyComponent", () => {
  it("should render with default props", () => {
    const wrapper = shallow(<TypographyComponent text={"hello"} />);
    expect(wrapper.text()).to.include("hello");
    // expect(true).to.equal(true);
  });
});
