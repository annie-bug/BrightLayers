import React from "react"
import Navbar from "./components/Navbar.jsx"
import Home from './pages/Home.jsx'
import LetsTalk from "./pages/LetsTalk.jsx"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"

function App() {
  

  return (
    <div className="bg-[#ecf0f1]">
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/LetsTalk" element = {<LetsTalk />} />
      </Routes>
      {/* <Navbar />
      <Home /> */}
    </div>
  )
}

export default App
