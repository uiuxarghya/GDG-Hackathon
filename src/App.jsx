import React from "react"
import Landing from './components/home/Landing'
import Navbar from './components/universal/navbar'
import ParticlesComponent from "./components/universal/particles"
function App() {
  

  return (

    <div className="App">
      <ParticlesComponent id="particles" />
      <Navbar/>
      <Landing/>
    </div>
  )
}

export default App
