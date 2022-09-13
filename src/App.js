import "./App.css";
import Navabar from "./Component/Navabar";
import Shop from "./Component/Shop";
import React from "react";
function App() {
  return (
    <>
      <Navabar />
      <div className="container">
        <Shop />
      </div>
    </>
  );
}

export default App;
