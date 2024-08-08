import { render, screen } from "@testing-library/react";
import Modal from "./index";
import userEvent from "@testing-library/user-event";

describe("test modal component", () => {
  test("render model component with it's component", () => {
    render(
      <Modal
        modelHeader={true}
        modelFooter={true}
        onSubmit={() => {}}
        open={false}
        title="Model Title"
      >
        <h1>Modal Content</h1>
      </Modal>
    );

    const button = screen.getByRole("button");
    userEvent.click(button);

    const testModelContent = screen.getByText("Modal Content", {
      selector: "h1",
    });
    expect(testModelContent).toBeInTheDocument();
  });
});
