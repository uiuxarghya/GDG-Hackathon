import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import backgroundmusic from "/music-lib/bgm1.mp3";
import "@fontsource/caveat"; 

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.35;
      audio.loop = true;

      const updateProgress = () => {
        setProgress((audio.currentTime / audio.duration) * 100);
      };

      audio.addEventListener("timeupdate", updateProgress);

      // Start playing by default
      audio.play().catch((error) => console.log("Autoplay blocked:", error));

      return () => audio.removeEventListener("timeupdate", updateProgress);
    }
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto p-6 mt-[15px] 
                    rounded-xl bg-white/10 backdrop-blur-xl shadow-lg 
                    border border-white/20 text-white">
      
      {/* Haiku-Style Tagline */}
      <div className="text-center tracking-wide mb-6 space-y-2">
        <p className="uppercase text-lg font-semibold text-purple-300" style={{ fontFamily: "'Caveat', cursive" }}>
          Take a break
        </p>
        <p className="text-4xl font-bold text-purple-400" style={{ fontFamily: "'Caveat', cursive" }}>
          Watch the stars
        </p>
        <p className="italic text-lg text-purple-300" style={{ fontFamily: "'Caveat', cursive" }}>
          Let yourself be immersed
        </p>
      </div>

      <audio ref={audioRef} src={backgroundmusic} preload="auto" autoPlay />

      {/* Music Player Controls */}
      <div className="flex items-center w-full space-x-4">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="p-3 rounded-full bg-white/20 text-white hover:bg-purple-500 transition-all duration-300 shadow-lg"
        >
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>

        {/* Progress Bar */}
        <div 
          className="w-full bg-white/20 rounded-full h-2 transition-all duration-300 relative overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className={`rounded-full bg-purple-500 transition-all duration-300 ${hovered ? 'h-3' : 'h-2'}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMusic;
