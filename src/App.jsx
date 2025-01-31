
import React from "react"

import Landing from './components/home/Landing'
import Navbar from './components/universal/navbar'
import About from './components/home/about'
import { Route, Router } from "lucide-react"

function App() {
  

  return (

     <>
      <Navbar/>
      <Landing/>
      <About/>
     </>
  );
}

export default App;

