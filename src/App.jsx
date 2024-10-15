import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <div className="basis-[14%] h-[100vh]  ">
        <Sidebar />
      </div>
      <div className="basis-[86%] border">d</div>
    </div>
  );
};

export default App;
