import { render, screen } from "@testing-library/react";
import ButtonComponent from "./index";

describe("test button component", () => {
  test("renders button", () => {
    render(
      <ButtonComponent title="Click me" icon={<></>} justifyContent={"left"} />
    );

    const button = screen.getByText("Click me", {
      selector: "button",
    });
    expect(button).toBeInTheDocument();
  });
});
