import React from "react";
import Reactdev from "../components/Reactdev";
import Browse from "../components/Browse";
import Jobposts from "../components/Jobposts";
const Home = () => {
  return (
    <div>
      <Reactdev />
      <Browse />
      <Jobposts isHome={true} />
    </div>
  );
};

export default Home;
