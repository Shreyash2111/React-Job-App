import React, { useState } from "react";
import reactlogo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-blue-900 w-full h-16 p-2 sm:px-10 text-white flex justify-between items-center border-b-2 border-indigo-400 max-[400px]:text-[13px] max-[400px]:p-2">
      <div className="flex gap-2 justify-center items-center">
        <img
          src={reactlogo}
          alt=""
          className="bg-white rounded-full p-1 h-7 sm:h-8"
        />
        <p className="sm:text-lg text-md font-semibold">React Jobs</p>
      </div>
      <div className="text-white flex gap-2 text-sm sm:text-lg font-semibold">
        <ul className="flex justify-between items-center gap-4 ">
          <li>
            <NavLink
              to=""
              className=" sm:p-3 p-2 rounded-lg"
              style={({ isActive }) => {
                return isActive ? { backgroundColor: "black" } : {};
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="jobs"
              className=" sm:p-3 p-2 rounded-lg"
              style={({ isActive }) => {
                return isActive ? { backgroundColor: "black" } : {};
              }}
            >
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="add-job"
              className=" sm:p-3 p-2 rounded-lg"
              style={({ isActive }) => {
                return isActive ? { backgroundColor: "black" } : {};
              }}
            >
              Add Job
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
