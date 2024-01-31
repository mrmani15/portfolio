import React from "react";
import { CgMail } from "react-icons/cg";
import { AiOutlineMobile } from "react-icons/ai";
import { BsChevronDoubleDown } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="home-me main-bg pb-5" id="home">
      <img
        src="/pic.png"
        alt="Manish Pic"
        className="myImg card-hover img-fluid"
      />
      <h3 className="mt-4 text-white">Hi, I'm</h3>
      <h1 className="text-warning">MANISH KUMAR</h1>
      <h3 className="text-white">Full Stack Developer</h3>
      <h5 className="text-white">
        <a href="mailto:memanishrahul@gmail.com">
          {" "}
          <span>
            <CgMail />
          </span>{" "}
          memanishrahul@gmail.com
        </a>
      </h5>
      <h5 className="text-white">
        {" "}
        <span>
          <AiOutlineMobile />
        </span>{" "}
        +91 8340283358
      </h5>
      <h5 className="text-white">
        <a
          href="https://www.linkedin.com/in/manish-rahul/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <span>
            <FaLinkedin />
          </span>{" "}
          manish-rahul
        </a>
      </h5>
      <h5 className="text-white">
        <a href="https://github.com/mrmani15" target="_blank" rel="noreferrer">
          {" "}
          <span>
            <FaGithub />
          </span>{" "}
          mrmani15
        </a>
      </h5>

      <a
        className="btn btn-warning btn-lg mt-4 font-weight-bolder"
        href="https://drive.google.com/file/d/1UB3IbPFG5wtHbF5q67IYpao0VayW8B0s/view?usp=drive_link"
        target="_blank"
        rel="noreferrer"
      >
        RESUME
      </a>
      <a href="#aboutme" className="mt-4">
        {" "}
        <BsChevronDoubleDown />
      </a>
    </div>
  );
};

export default Home;
