import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { frontendTech, backendTech, techTools } from "../components/Data";

const Know = () => {
  return (
    <div className="pt-5" id="techskill">
      <h1 className="underline text-center">Tech & Tools</h1>

      <div className="bg-dark rounded-lg p-2 mt-4">
        <div className="d-flex flex-md-row flex-sm-column justify-content-around flex-wrap align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://i.ibb.co/C76nVhV/frontend.png"
              className="img-fluid mx-auto d-block"
              alt="Frontend"
              width="90"
            />
            <h5 className="mt-2 mb-1 text-warning">Frontend</h5>
          </div>

          <div className="d-flex text-bold justify-content-around align-items-center p-auto w-75">
            <div className="row">
              {frontendTech.map((tech, index) => {
                return (
                  <div className="col-6 mb-2 col-md-4" key={index}>
                    <div className="text-uppercase">
                      <FaCheckCircle />
                      <span className="ml-2">{tech}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark rounded-lg p-2 mt-4">
        <div className="d-flex flex-md-row flex-sm-column justify-content-around flex-wrap align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://i.ibb.co/J28nH1g/datastructure.png"
              className="img-fluid mx-auto d-block"
              alt="Backend"
              width="90"
            />
            <h5 className="mt-2 mb-1 text-warning">Backend</h5>
          </div>
          <div className="d-flex text-bold justify-content-around align-items-center w-75">
            <div className="row">
              {backendTech.map((tech, index) => {
                return (
                  <div className="col-6 mb-2 col-md-4" key={index}>
                    <div className="text-uppercase">
                      <FaCheckCircle />
                      <span className="ml-2">{tech}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark rounded-lg p-2 mt-4">
        <div className="d-flex flex-md-row flex-sm-column justify-content-around flex-wrap align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src="img/backend.png"
              className="img-fluid mx-auto d-block"
              alt="tech and tools"
              width="90"
            />
            <h5 className="mt-2 mb-1 text-warning">Technologies</h5>
          </div>
          <div className="d-flex text-bold justify-content-around align-items-center p-auto w-75">
            <div className="row">
              {techTools.map((tech, index) => {
                return (
                  <div className="col-6 mb-2 col-md-4" key={index}>
                    <div className="text-uppercase">
                      <FaCheckCircle />
                      <span className="ml-2">{tech}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Know;
