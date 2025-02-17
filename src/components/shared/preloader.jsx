import React from "react";
// import loader from "../assets/videos/loader-3.gif";
// import "../styles/preloader.css";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      <img
        src="/assets/videos/loader-1.gif"
        alt="Loading..."
        className="w-40 h-40 object-contain"
      />
    </div>
  );
};

export default Preloader;
