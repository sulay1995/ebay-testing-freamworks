import { render, screen } from "@testing-library/react";
import ConditionalDiv from "./index";
import userEvent from "@testing-library/user-event";

describe("test conditional div testing", () => {
  test("check hidden class when button is not click", () => {
    render(<ConditionalDiv />);

    const text = screen.queryByText("Hello", {
      selector: "p",
    });

    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("hide");
  });

  test("check show class when button is click", () => {
    render(<ConditionalDiv />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const text = screen.queryByText("Hello", {
      selector: "p",
    });

    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("show");
  });
});
