import Model, { ModelInterface } from "./index";
import { configure, mount } from "enzyme";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";
import { Button, DialogActions, DialogTitle } from "@mui/material";
import { ReactElement } from "react";

configure({ adapter: new Adapter() });

// describe("Test the model component", () => {
//   const onSubmitMock = () => {
//     console.log("Submit clicked");
//   };

//   const defaultProps = {
//     modelHeader: true,
//     modelFooter: true,
//     onSubmit: onSubmitMock,
//     open: false,
//   };

//   it("test the modal content should not be in the document by default", () => {
//     const wrapper = shallow(<Model {...defaultProps}>Test Content</Model>);
//     const button = wrapper.find(Button).at(0);
//     expect(wrapper.find(Button).at(0).text()).to.equal("Preview Notice");
//   });

//   it("should open the dialog when Preview Notice button is clicked", () => {
//     const wrapper = shallow(<Model {...defaultProps}>Test Content</Model>);
//     const dialogContent = wrapper.find(DialogContent);
//     wrapper.find(Button).at(0).simulate("click");
//     expect(dialogContent.text()).to.equal("Test Content");
//   });
// });

describe.only("Model test cases", () => {
  let wrapper;
  let onSubmitStub;

  const defaultProps: ModelInterface = {
    modelHeader: true,
    modelFooter: true,
    onSubmit: () => {},
    open: false,
  };

  beforeEach(() => {
    onSubmitStub = sinon.stub();
    const component: ReactElement = (
      <Model {...defaultProps}>{<div>Test Content</div>}</Model>
    );
    wrapper = shallow(component);
  });

  it('should render the "Preview Notice" button', () => {
    expect(wrapper.find(Button).at(0).text()).to.equal("Preview Notice");
  });

  // it('should open the dialog when the "Preview Notice" button is clicked', () => {
  //   wrapper.find(Button).at(0).simulate("click");
  //   expect(wrapper.find(Model).prop("open")).to.be.true;
  // });

  it("should render the dialog header if modelHeader is true", () => {
    wrapper.find(Button).at(0).simulate("click");
    expect(wrapper.find(DialogTitle)).to.have.lengthOf(1);
  });

  it("should not render the dialog header if modelHeader is false", () => {
    wrapper.setProps({ modelHeader: false });
    wrapper.find(Button).at(0).simulate("click");
    expect(wrapper.find(DialogTitle)).to.have.lengthOf(0);
  });

  // it("should close the dialog when the close button is clicked", () => {
  //   wrapper.find(Button).at(0).simulate("click");
  //   const btn = wrapper.find('[data-testid="close"]');
  //   console.log("btn ", btn.debug());
  //   wrapper.find('[data-testid="close"]').simulate("click");
  //   expect(wrapper.find(Model).prop("open")).to.be.false;
  // });

  // it("should render the dialog footer if modelFooter is true", () => {
  //   wrapper.find(Button).at(0).simulate("click");
  //   expect(wrapper.find(DialogActions)).to.have.lengthOf(1);
  // });

  // it("should not render the dialog footer if modelFooter is false", () => {
  //   wrapper.setProps({ modelFooter: false });
  //   wrapper.find(Button).at(0).simulate("click");
  //   expect(wrapper.find(DialogActions)).to.have.lengthOf(0);
  // });

  // it("should call onSubmit when the submit button is clicked", () => {
  //   wrapper.find(Button).at(0).simulate("click");
  //   wrapper.find('button[data-testid="submit"]').simulate("click");
  //   expect(onSubmitStub).to.have.been.calledOnce;
  // });
});
