import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="w-screeen h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Homepage;
