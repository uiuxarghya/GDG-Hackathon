import React, { useState, useEffect } from "react";
import Preloader from "./components/universal/Preloader"; // Import Preloader
import Navbar from "./components/universal/navbar";
import ParticlesComponent from "./components/universal/particles";
import Tracks from "./components/tracks/tracks";
import Footer from "./components/footer/Footer";
import Landing from "./components/home/Landing";
import About from "./components/home/about";
import Sponsors from "./components/sponsors/sponsors";
import Prizes from "./components/prizes/prizes";
import Judges from "./components/judges/judges";
import Mentors from "./components/mentors/mentors";
import Faq from "./components/faq/Faq";
import Timeline from "./components/timeline/timeline";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const gifDuration = 2990; // Set this to the actual duration of your GIF in milliseconds
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide preloader after GIF completes
    }, gifDuration);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader /> // Show preloader while loading
      ) : (
        <>
          <ParticlesComponent id="particles" />
          <Navbar />
          <section id="home"><Landing /></section>
          <section id="about"><About /></section>
          <section id="timeline"><Timeline /></section>
          <section id="tracks"><Tracks /></section>
          <section id="sponsors"><Sponsors /></section>
          <section id="prizes"><Prizes /></section>
          <section id="judges"><Judges /></section>
          <section id="mentors"><Mentors /></section>
          <section id="faqs"><Faq /></section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
