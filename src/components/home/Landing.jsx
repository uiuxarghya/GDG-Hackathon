import React from "react";
import Spline from '@splinetool/react-spline';
import "../css/landing.css";

export default function Home() {
  return (
    <main>
      <Spline className=" h-[200px]"
        scene="https://prod.spline.design/RnUyvM4a9P5gpJiG/scene.splinecode" 
      />
      <div className="hero-text">
      <h1 className=" text-white text-5xl font-bold">Unleash Your Creativity </h1>
      <p className=" text-[#eeeeee9f]">Where Innovation Meets Execution</p>
      <p1 className=" text-white">April , 2025 📍Techno Main Salt Lake</p1>
    
      </div>
      <button className="btn-3 bg-purple-700 text-white">Apply On Devfolio</button>
      <div className="hider bg-[#00040f] w-[100%] h-[40px]"></div>
    </main>
  );
}
