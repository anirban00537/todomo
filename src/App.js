import React, { useState, useEffect } from "react";
import "./App.css";
import MainScreen from "./components/mainScreen/MainScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import db from "./Firebase";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainScreen />
    </div>
  );
}

export default App;
