import React from "react"
import Landing from './components/home/Landing'
import Navbar from './components/universal/navbar'
import ParticlesComponent from "./components/universal/particles"
import Timeline from "./components/timeline/timeline"

function App() {
  

  return (

    <div className="App">
      <ParticlesComponent id="particles" />
      <Navbar/>
      <Landing/>
      <Timeline/>
    </div>
  )
}

export default App
