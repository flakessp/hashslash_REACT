import React from "react";
import ReactDOM from "react-dom";
import Hello from "./hello";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Hello message="🙂" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
