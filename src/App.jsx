import React from "react";
import Landing from './components/home/Landing';
import Navbar from './components/universal/navbar';
import Hero from "./components/hero/Hero";
import ParticlesComponent from "./components/universal/particles";

import Tracks from './components/tracks/tracks';
import Footer from "./components/footer/Footer";
import About from './components/home/about'
import Sponsors from './components/sponsors/sponsors'
import Prizes from './components/prizes/prizes'
import Judges from './components/judges/judges'
import Mentors from './components/mentors/mentors'
import Faq from "./components/faq/Faq";
import Community from "./components/contact/community";
import TimeLine from './components/timeline/timeline'



function App() {
  return (
    <div className="App">
 
      <ParticlesComponent id="particles" />
      <Navbar />
      <Landing />
      <About />
      <Hero />
      <TimeLine/>
    
      <Tracks />
      <Sponsors />
      <Prizes/>
      <Judges/>
      <Mentors/>
      <Community />
      <Faq />
      <Footer />
    
    </div>
  );
}

export default App;

