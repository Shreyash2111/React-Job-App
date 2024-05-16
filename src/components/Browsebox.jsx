import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Browsebox = ({ category }) => {
  return (
    <div
      className={`${
        category.but === "Add Job" ? `bg-blue-100` : "bg-slate-200"
      } flex flex-col gap-2  p-4 rounded-lg w-5/6 sm:w-2/3 lg:w-1/3`}
    >
      <p className="font-bold">{category.head}</p>
      <p className="text-sm font-semibold">{category.p}</p>

      {category.but === "Add Job" ? (
        <NavLink
          to="/add-job"
          className="bg-blue-900 hover:bg-blue-800 p-2 text-white rounded-lg font-bold flex justify-center"
        >
          <button>Add Job</button>
        </NavLink>
      ) : (
        <NavLink
          to="/jobs"
          className="bg-black p-2 hover:bg-slate-900 text-white rounded-lg font-bold flex justify-center"
        >
          <button>Browse Jobs</button>
        </NavLink>
      )}
    </div>
  );
};

export default Browsebox;
