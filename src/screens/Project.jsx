import cashflowImg from "../img/cashflow_img.png";
import blogVerseImg from "../img/blogVerse_img.png";
import chatAppImg from "../img/chatApp_img.png";
import "../App.css";

// import ProjectImgs from "../utils/ProjectSliderImg.js";

import { useState } from "react";

import Slider from "../components/Slider.jsx";

// import ProjectSlider from "../"

function Project() {
  // const [slider, setSlider] = useState([]);

  return (
    <section
      id="project"
      className="h-[100vh] {border-[2px]  bg-gray-800/70}  flex flex-col gap-6 items-center  "
    >
      <div className="flex flex-wrap gap-1 justify-center items-center mt-16">
        <img
          className="w-[3.3vw] h-[3.3vw] rounded-[50%]"
          src="https://img.icons8.com/?size=100&id=104233&format=png&color=000000"
          alt="project_logo"
          loading="lazy"
        />
        <h1 className="text-[2.1vw]">
          PROJ<span className="text-blue-500">ECTS</span>{" "}
        </h1>
      </div>
      <Slider />
    </section>
  );
}

export default Project;
