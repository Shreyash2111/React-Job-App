import React, { useEffect } from "react";
import useState from "react-usestateref";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Jobdetails = ({ deleteJob }) => {
  const { id } = useParams();
  const navi = useNavigate();
  const job = useLoaderData();
  const deleteJob1 = (jobId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;
    deleteJob(jobId);
    toast.success("Job Deleted Successfully");
    return navi("/jobs");
  };

  return (
    <div className="max-w-screen max-h-screen ">
      <div className="px-6 py-3 bg-white">
        <p>
          <Link
            className="flex justify-left items-center gap-2 text-lg font-semibold"
            to="/jobs"
          >
            <FaArrowLeft />
            Back to Job Listings
          </Link>
        </p>
      </div>
      <div className="sm:flex-row flex flex-col justify-between gap-3 w-full  bg-blue-100 p-6">
        <div className=" sm:w-4/6  flex flex-col gap-4">
          <div className="flex flex-col p-3 gap-5 bg-white rounded-lg">
            <p className="font-light ">{job.type}</p>
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <p className="text-red-800 text-lg">{job.location}</p>
          </div>
          <div className="bg-white flex flex-col p-3 gap-5 rounded-lg font-semibold text-lg">
            <p className=" text-blue-800 ">Job description</p>
            <p className="">{job.description}</p>
            <p className=" text-blue-800 ">Salary</p>
            <p>{job.salary}</p>
          </div>
        </div>
        <div className="sm:w-2/6 w-full flex flex-col gap-4">
          <div className="bg-white text-sm font-semibold flex flex-col gap-3 p-6 rounded-lg">
            <h1 className="font-bold text-xl">Company Info</h1>
            <h1 className="text-2xl">{job.company.name}</h1>
            <p>{job.company.description}</p>
            <h1 className="text-lg">Contact Details:</h1>
            <p className="font-bold bg-blue-100 p-2">
              {job.company.contactEmail}
            </p>
            <h1 className="text-lg">Contact-Phone:</h1>
            <p className="font-bold bg-blue-100 p-2">
              {job.company.contactPhone}
            </p>
          </div>
          <div className="flex flex-col p-6 gap-3 rounded-lg bg-white">
            <h1>Manage Job</h1>
            <Link to={`/edit-job/${id}`}>
              <button className="text-xl bg-blue-600 rounded-2xl text-white p-2 w-full">
                Edit Job
              </button>
            </Link>
            <Link>
              <button
                className="text-xl bg-red-600 rounded-2xl text-white p-2 w-full"
                onClick={() => deleteJob1(job.id)}
              >
                Delete Job
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = res.json();

  console.log(data);
  return data;
};
export { Jobdetails as default, jobLoader };
