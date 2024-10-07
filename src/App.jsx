import { useState } from "react";
import "./App.css";

//components:
import Navbar from "./screens/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";
import Experience from "./screens/Experience";
import Project from "./screens/Project";
import Contact from "./screens/Contact";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="App bg-gray-900">
      <SocialMedia />
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
