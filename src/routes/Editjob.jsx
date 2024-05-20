import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Navigate,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { toast } from "react-toastify";
const Addjobpage = ({ updateJob }) => {
  const { id } = useParams();
  const job = useLoaderData();
  const [type, setType] = useState(job.type);
  const [title, setTitle] = useState(job.title);
  const [description, setDescription] = useState(job.description);
  const [location, setLocation] = useState(job.location);
  const [salary, setSalary] = useState(job.salary);
  const [companyname, setCompanyName] = useState(job.company.name);
  const [companydescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [companyemail, setCompanyEmail] = useState(job.company.contactEmail);
  const [comapanyphoneno, setComapanyPhoneNo] = useState(
    job.company.contactPhone
  );

  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const updatedJob = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyname,
        description: companydescription,
        contactEmail: companyemail,
        contactPhone: comapanyphoneno,
      },
    };
    updateJob(updatedJob);

    toast.success("Edited Successfully");
    return navigate("/jobs");
  };
  return (
    <div className="w-full h-full px-4 py-10 sm:p-2 ">
      <div className="px-6 py-2 bg-white">
        <p>
          <Link
            className="flex justify-left items-center gap-2 text-lg font-semibold"
            to={`/jobs/${id}`}
          >
            <FaArrowLeft />
            Back
          </Link>
        </p>
      </div>
      <form
        onSubmit={submitForm}
        className="mx-auto container max-w-2xl bg-blue-100 flex flex-col items-center  gap-3 py-5 px-3 rounded-lg"
      >
        <h1 className="text-2xl font-bold">Add Job</h1>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="type" className="text-lg font-bold">
            Job Type
          </label>
          <select
            name="type"
            id="type"
            className="p-2 rounded-lg border-2 border-slate-300"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        {/*jobTitle */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="title" className="text-lg font-bold">
            Job Listing Name
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="p-2 rounded-lg border-2 border-slate-300"
            placeholder="eg. React Developer "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/*job description */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="description" className="text-lg font-bold">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="p-2 rounded-lg border-2 border-slate-300"
            rows={4}
            placeholder="Add any job duties,expectations,requirements etc "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/*Salary*/}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="salary" className="text-lg font-bold">
            Salary
          </label>
          <select
            name="salary"
            id="salary"
            className="p-2 rounded-lg border-2 border-slate-300"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          >
            <option value="Under $50K">Under $50K</option>
            <option value="$50K - 60K">$50K - $60K</option>
            <option value="$60K - 70K">$60K - $70K</option>
            <option value="$70K - 80K">$70K - $80K</option>
            <option value="$80K - 90K">$80K - $90K</option>
            <option value="$90K - 100K">$90K - $100K</option>
            <option value="$100K - 125K">$100K - $125K</option>
            <option value="$125K - 150K">$125K - $150K</option>
            <option value="$150K - 175K">$150K - $175K</option>
            <option value="$175K - 200K">$175K - $200K</option>
            <option value="Over $200K">Over $200K</option>
          </select>
        </div>
        {/*Location */}
        <div className="w-full flex flex-col gap-2 mb-4">
          <label htmlFor="location" className="text-lg font-bold">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            className="p-2 rounded-lg border-2 border-slate-300"
            placeholder="Add any job duties,expectations,requirements etc "
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <h1 className="text-2xl font-semibold">Company Info</h1>
        {/*company name */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="companyname" className="text-lg font-bold">
            Company Name
          </label>
          <input
            type="text"
            name="companyname"
            id="companyname"
            className="p-2 rounded-lg border-2 border-slate-300"
            placeholder="ABC company "
            value={companyname}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        {/*company description */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="companydescription" className="text-lg font-bold">
            Company Description
          </label>
          <input
            type="text"
            name="companydescription"
            id="companydescription"
            className="p-2 rounded-lg border-2 border-slate-300"
            placeholder="Company Description "
            value={companydescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
          />
        </div>
        {/*company contact */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="companycontact" className="text-lg font-bold">
            Company Contact
          </label>
          <input
            type="text"
            name="companycontact"
            id="companycontact"
            className="p-2 rounded-lg border-2 border-slate-300"
            placeholder="555-555-5555"
            value={comapanyphoneno}
            onChange={(e) => setComapanyPhoneNo(e.target.value)}
          />
        </div>
        {/*company email */}
        <div className="w-full flex flex-col gap-2 mb-4">
          <label htmlFor="companyemail" className="text-lg font-bold">
            Company Email
          </label>
          <input
            type="email"
            name="companyemail"
            id="companyemail"
            className="p-2 rounded-lg border-2 border-slate-300"
            placeholder="company@gmail.com "
            value={companyemail}
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
        </div>
        <button
          className="w-full p-2 bg-blue-500 text-xl fot-bold text-white rounded-3xl hover:bg-blue-600"
          type="submit"
        >
          Update Job
        </button>
      </form>
    </div>
  );
};

export default Addjobpage;
