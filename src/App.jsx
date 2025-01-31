
import React from "react"

import Landing from './components/home/Landing'
import Navbar from './components/universal/navbar'
<<<<<<< HEAD
import About from './components/home/about'
import { Route, Router } from "lucide-react"

=======
import Hero from "./components/hero/Hero"
import ParticlesComponent from "./components/universal/particles"
import Timeline from "./components/timeline/timeline"
import Tracks from './components/tracks/tracks'
>>>>>>> 39ac5168a9ebc53ec6b71da83441680f376cdf1d
function App() {
  

  return (

    <div className="App">
      <ParticlesComponent id="particles" />
      <Navbar/>
      <Landing/>
<<<<<<< HEAD
      <About/>
     </>
  );
=======
      
      <Hero />
      <Timeline/>
      <Tracks/>
    </div>
  )
>>>>>>> 39ac5168a9ebc53ec6b71da83441680f376cdf1d
}

export default App;

