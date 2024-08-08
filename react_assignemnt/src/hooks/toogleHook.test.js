import React from "react";
import { renderHook, act } from "@testing-library/react";
import useToggle from "./toogleHook";

describe("testing the custom hook toogleHook", () => {
  it("check tooglehook inital value", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toEqual(true);
  });

  it("check the toogleHook value afrer calling it", () => {
    const { result } = renderHook(() => useToggle(true));
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toEqual(false);
  });
});
