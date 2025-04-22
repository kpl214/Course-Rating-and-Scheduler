import React from "react";
import { NavLink } from "react-router-dom";
import background from "../assets/MarstonFries.jpg"
import communityCircle from "../assets/RateMyCoursesUpdated.jpg"

const Home = () => {
  return (
    <div className="bg-[#FAF2DB] w-full min-h-screen">
      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20 z-10"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
          <div className="bg-[#004aad] bg-opacity-90 px-8 py-6 rounded-xl shadow-lg text-white">
            <h1 className="text-5xl font-bold">Rate My Courses!</h1>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <img
          src={communityCircle}
          alt="Community Circle"
          className="w-full h-auto object-cover"
        />

<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
    <div className="bg-[#004aad] bg-opacity-90 px-8 py-6 rounded-xl shadow-lg">
      <p className="text-2xl font-semibold">Real Reviews. Smart Decisions.</p>
      <NavLink to="/coursesList">
        <button className="btn mt-4 bg-white text-[#004aad] hover:bg-[#f57c00] hover:text-white">
          Get Started
        </button>
      </NavLink>
    </div>
  </div>
      </div>
    </div>
  );
};
export default Home;
