import Model from "./index";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button, DialogContent } from "@mui/material";

configure({ adapter: new Adapter() });

describe("Test the model component", () => {
  const onSubmitMock = () => {
    console.log("Submit clicked");
  };

  const defaultProps = {
    modelHeader: true,
    modelFooter: true,
    onSubmit: onSubmitMock,
    open: false,
  };

  it("test the modal content should not be in the document by default", () => {
    const wrapper = shallow(<Model {...defaultProps}>Test Content</Model>);
    const button = wrapper.find(Button).at(0);
    expect(wrapper.find(Button).at(0).text()).to.equal("Preview Notice");
  });

  it("should open the dialog when Preview Notice button is clicked", () => {
    const wrapper = shallow(<Model {...defaultProps}>Test Content</Model>);
    const dialogContent = wrapper.find(DialogContent);
    wrapper.find(Button).at(0).simulate("click");
    expect(dialogContent.text()).to.equal("Test Content");
  });
});
