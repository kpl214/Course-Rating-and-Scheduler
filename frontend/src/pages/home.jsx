import React from "react";

const Home = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Rate My Courses!</h1>
      <p className="mb-5">
        Our website is meant to be a place where one can share their experiences
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Home;