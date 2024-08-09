import React, { useState } from "react";
import "./index.css";

const ToggledDiv = () => {
  const [showDiv, setShowDiv] = useState(false);
  return (
    <>
      <button onClick={() => setShowDiv(!showDiv)}>Toggle me</button>
      <p className={`${showDiv ? "show" : "hide"}`}>Hello</p>
    </>
  );
};

export default ToggledDiv;
