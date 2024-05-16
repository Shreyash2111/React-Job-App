import React from "react";
import Browsebox from "./Browsebox";
import { NavLink } from "react-router-dom";

const Browse = () => {
  const box1 = [
    {
      head: "For Developers",
      p: "Browse out React jobs and start your career today",
      but: "Browse Jobs",
    },
    {
      head: "For Employers",
      p: "List your job to find the perfect developer for the role",
      but: "Add Job",
    },
  ];
  return (
    <div className="w-full  flex flex-wrap justify-center items-center gap-4 py-4 ">
      <Browsebox category={box1[0]} />
      <Browsebox category={box1[1]} />
    </div>
  );
};

export default Browse;
