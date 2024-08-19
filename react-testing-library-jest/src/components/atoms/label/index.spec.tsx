import React from "react";

import TypographyComponent from "./index";
import { render } from "enzyme";

describe("TypographyComponent", () => {
  it("should render with default props", () => {
    const wrapper = render(<TypographyComponent text={"hello"} />);
    expect(wrapper.text()).to.include("hello");
    // expect(true).to.equal(true);
  });
});
