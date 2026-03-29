import React, { useState } from "react";
import './../styles/App.css';
import ToggleParagraph from "./ToggleParagraph.js";


const App = (props) => {

  return (
    <div className="App" id="main">
      
      <ToggleParagraph isVisible="true"/>
    </div>
  );
}

export default App;
