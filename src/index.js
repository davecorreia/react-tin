import React from "react";
import { render } from "react-dom";
import ManageTins from "./manage_tins";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left"
};

const App = () =>
  <div style={styles}>
    <ManageTins />
  </div>;

render(<App />, document.getElementById("root"));
