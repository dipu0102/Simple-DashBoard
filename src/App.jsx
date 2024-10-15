import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Sidebar from "./Components/Sidebar";
import DashboardView from "./Components/DashboardView";

const App = () => {
  return (
    <div className="flex">
      <div className="basis-[14%] h-[100vh]  ">
        <Sidebar />
      </div>
      <div className="basis-[86%] border">
        <DashboardView />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
