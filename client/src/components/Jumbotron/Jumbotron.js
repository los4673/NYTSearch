import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ backgroundColor: "#20315A", color: "white", height: 100, clear: "both", paddingTop: 30, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
