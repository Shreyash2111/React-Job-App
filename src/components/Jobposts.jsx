import React, { useEffect, useState } from "react";
import Jobpostbox from "./Jobpostbox";
import job from "../jobs.json";
const Jobposts = ({ isHome = false }) => {
  const [jobs, setJob] = useState([]);
  useEffect(() => {
    const fetchjobs = async () => {
      try {
        const apiurl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
        const res = await fetch(apiurl);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchjobs();
  }, [jobs]);
  return (
    <div className="w-full bg-blue-200 p-3 flex flex-col justify-center item-center">
      <p className="text-blue-500 font-bold text-2xl flex justify-center m-4">
        {isHome ? `Recent Jobs` : `Browse Jobs`}
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-3">
        {jobs.map((job) => (
          <Jobpostbox key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobposts;
