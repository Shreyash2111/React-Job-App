import { useState } from "react";
import Homepage from "./routes/Homepage.jsx";
import Home from "./routes/Home.jsx";
import Jobs from "./routes/Jobs.jsx";
import Jobdetails, { jobLoader } from "./routes/Jobdetails.jsx";
import Addjobpage from "./routes/Addjobpage.jsx";
import Editjob from "./routes/Editjob.jsx";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const addJob = async (newJob) => {
    console.log(newJob);
    const res = await fetch(`https://json-server-react-job-app.onrender.com/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newJob),
    });
    return;
  };
  const updateJob = async (newJob) => {
    console.log(newJob);
    const res = await fetch(`https://json-server-react-job-app.onrender.com/jobs/${newJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newJob),
    });
    return;
  };
  const deleteJob = async (jobid) => {
    const res = await fetch(`https://json-server-react-job-app.onrender.com/jobs/${jobid}`, {
      method: "DELETE",
    });
    return;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Homepage />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/add-job" element={<Addjobpage addJob={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<Editjob updateJob={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<Jobdetails deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<h1>Page not Found</h1>}></Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
