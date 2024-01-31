import React from "react";
import About from "./About";
import Know from "./Know";

const AboutMe = () => {
  return (
    <div className="container-fluid pt-5" id="aboutme">
      <h1 className="underline text-center">About me</h1>
      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-16">
          <About />
        </div>
        <div className="col-md-8 col-sm-16">
          <Know />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;