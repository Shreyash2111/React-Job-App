import React, { useEffect, useState } from "react";
import Jobpostbox from "./Jobpostbox";
import job from "../jobs.json";
import { Oval } from "react-loader-spinner";
const Jobposts = ({ isHome = false }) => {
  const [jobs, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchjobs = async () => {
      try {
        const apiurl = isHome
          ? "https://json-server-react-job-app.onrender.com/jobs?_limit=3"
          : "https://json-server-react-job-app.onrender.com/jobs";
        const res = await fetch(apiurl);
        const data = await res.json();
        setJob(data);
        setLoading(false);
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
      {loading ? (
        <div className="w-full flex justify-center ">
          <Oval
            visible={true}
            height="100"
            width=""
            color="blue"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-3">
          {jobs.map((job) => (
            <Jobpostbox key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobposts;
