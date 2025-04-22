import React from "react";
import { NavLink } from "react-router-dom";
import background from "../assets/CenturyTower.jpg";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Rate My Courses!</h1>
          <p className="mb-5">Post, Prepare, Predict</p>
          <NavLink to="/coursesList">
            <button className="btn bg-[#004aad] text-white hover:bg-[#f57c00]">
              Get Started
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
