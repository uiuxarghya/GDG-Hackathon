import React from "react";
import { Vortex } from "../ui/vortex";

export default function Community() {
  return (
    (<div
      className="w-[50%] mx-auto rounded-4xl    h-[30rem] overflow-hidden mt-12">
      <Vortex
        
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full border-purple-800 ">
        <h2 className="text-white text-2xl md:text-5xl font-bold text-center">
          Call for Community Partners
        </h2>
        <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
        Innovation Starts Here : Let’s Create Something Amazing with Your Support!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button
            className="px-4 py-2 bg-purple-800 hover:bg-purple-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Register Now
          </button>
          
        </div>
      </Vortex>
    </div>)
  );
}
