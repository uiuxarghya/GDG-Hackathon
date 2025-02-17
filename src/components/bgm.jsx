import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import backgroundmusic from "/music-lib/bgm1.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.5;
      audio.loop = true;

      // Attempt autoplay
      const tryAutoplay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay blocked. Waiting for user interaction...");
          document.addEventListener("click", playOnInteraction, { once: true });
          document.addEventListener("scroll", playOnInteraction, {
            once: true,
          });
          document.addEventListener("keydown", playOnInteraction, {
            once: true,
          });
        }
      };

      const playOnInteraction = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Still blocked:", error);
        }
      };

      tryAutoplay();

      const updateProgress = () => {
        setProgress((audio.currentTime / audio.duration) * 100);
      };

      audio.addEventListener("timeupdate", updateProgress);
      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
        document.removeEventListener("click", playOnInteraction);
        document.removeEventListener("scroll", playOnInteraction);
        document.removeEventListener("keydown", playOnInteraction);
      };
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
    <div className="flex justify-center items-center align-middle">
      <div className="w-[65%]">
        {/* Haiku-Style Tagline */}
        <div className="text-center tracking-wide mt-4 space-y-2">
          <p className=" text-lg text-purple-300 mt-2">
            Play this Music to Flow with the Vibe
          </p>
        </div>

        <audio ref={audioRef} src={backgroundmusic} preload="auto" />

        {/* Music Player Controls */}
        <div className="flex items-center w-full space-x-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="p-3 rounded-full bg-white/20 text-white hover:bg-purple-500 transition-all duration-300 shadow-lg"
          >
            {isPlaying ? <FaPause size={8} /> : <FaPlay size={8} />}
          </button>

          {/* Progress Bar */}
          <div
            className="w-full bg-white/20 rounded-full h-2 transition-all duration-300 relative overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className={`rounded-full bg-purple-500 transition-all duration-300 ${hovered ? "h-3" : "h-2"}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMusic;
