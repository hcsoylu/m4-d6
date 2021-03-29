import React, { useState, useEffect } from "react";
import Footernet from "./components/Footernet";
import Navnet from "./components/Navnet";
import "bootstrap/dist/css/bootstrap.min.css";
import Homecomponent from "./components/Homecomponent";

function App() {
  return (
    <div className="App">
      <Navnet />

      <Homecomponent />
      <Homecomponent />
      <Homecomponent />
      <Footernet />
    </div>
  );
}

export default App;
