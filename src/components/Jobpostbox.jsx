import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Jobpostbox = ({ job }) => {
  const [lessdes, setLessDes] = useState(true);
  let desc = job.description;
  if (lessdes) {
    desc = desc.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white p-2 flex flex-col justify-between gap-2 rounded-lg">
      <p className="text-sm text-slate-500 ">{job.type}</p>
      <h1 className="text-xl font-bold ">{job.title}</h1>
      <p className="text-sm font-semibold">{desc}</p>
      <p
        className="text-sm text-blue-400 font-semibold cursor-pointer"
        onClick={() => {
          setLessDes((prev) => !prev);
        }}
      >{`${lessdes ? `More` : `Less`}`}</p>
      <p className="text-sm text-blue-400 font-semibold">{job.salary}</p>
      <div className="w-full flex justify-between items-center">
        <div className=" flex gap-1 justify-center items-center text-red-700">
          <FaLocationDot />
          <p>{job.location}</p>
        </div>
        <Link
          to={`/jobs/${job.id}`}
          className="bg-blue-900 text-white p-2 rounded-lg hover:bg-blue-800"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Jobpostbox;
