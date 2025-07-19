import React, { useState, useEffect } from "react";
import Project from "../screens/Project";
import ProjectSliderImgs from "../utils/ProjectSliderImg.js";

import "../media/projects.css";

const lastIdx = ProjectSliderImgs.length - 1;

function Slider() {
  const [activeIdx, setActiveIdx] = useState(0); //or any idx b/w 0 to lastIdx

  useEffect(() => {
    const timerId = setInterval(() => {
      setActiveIdx(activeIdx === lastIdx ? 0 : activeIdx + 1);
    }, 5000);
    // Clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, [activeIdx]);

  return (
    <div className=" slider-container relative{ border-[2px]} w-[90%] h-[80vh] flex justify-center items-center ">
      {/* Project Card  */}

      <div className=" slider-cards  w-6/12  p-3  {border-green-500} flex flex-col  gap-4 justify-between border-b-[2px] border-t-[2px] border-solid border-b-yellow-600 border-t-blue-600 rounded-2xl transition-all duration-2000 ease-in-out  shadow-b hover:shadow-t ">
        <div>
          {ProjectSliderImgs.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`w-full {border-b-[2px]} flex flex-col justify-center gap-2 ${
                  activeIdx === idx ? " inline-block " : " hidden  "
                }`}
              >
                <h1 className="text-[2.2vmax] text-center font-semibold">
                  {item.title}
                </h1>
                <div className="flex justify-center items-center">
                  <img
                    className="w-9/12 h-60 rounded-lg "
                    src={item.img}
                    alt={item.alt}
                    srcSet=""
                  />
                </div>
                <div className="{border-[2px] } w-[100%]  text-xs text-justify text-white  overflow-hidden">
                  <h4 className="text-blue-500 py-4 font-extrabold text-[1.2vmax]">
                    Project Description{" "}
                    <span className="text-yellow-400">:</span>
                  </h4>
                  <p className="text-sm">{item.desc}</p>
                </div>
                {/* <div className="flex justify-evenly items-center">
                  <button className="border-y-[2px] border-b-blue-500 border-t-yellow-600 rounded-2xl p-2 text-white text-md ">
                    <a href="#about">View 👁️</a>
                  </button>
                  <button className="border-y-[2px] border-b-yellow-600 border-t-blue-500  rounded-2xl p-2 text-white text-md ">
                    <a href="#about">Code 👨‍💻</a>
                  </button>
                </div> */}
              </div>
            );
          })}
        </div>
        {/* Dots */}
        <div className="   {border-[2px]} flex gap-4 justify-center items-center">
          {ProjectSliderImgs.map((slide, idx) => (
            <div
              //   className= {activeIdx===idx ? "w-[2em] h-[2em] bg-white " : "w-[2em] h-[2em] bg-black"}
              key={idx}
              className={` slider-btn w-[1.3em] h-[1.3em] border-[3px] border-b-blue-500 border-t-yellow-400  rounded-[50%]  ${
                activeIdx === idx ? "bg-yellow-600" : ""
              }`}
              // onClick={(idx) => {
              //   //   e.StopPropagation();
              //   setActiveIdx(idx);
              // }}
              onClick={() => setActiveIdx(idx)}
              style={{ cursor: "pointer" }}
            ></div>
          ))}
        </div>
      </div>

      {/* Arrow Buttons */}
      <div className=" slider-btns absolute z-[1000] {border-[3px] } w-[70%]  text-[3vmax] flex justify-between items-center">
        <button
          className=" slider-btn w-[1.5em] h-[1.5em] rounded-md border-gray-500 hover:shadow-inner "
          onClick={() =>
            setActiveIdx(activeIdx === 0 ? lastIdx : activeIdx - 1)
          }
        >
          ◀️
        </button>
        <button
          className=" slider-btn w-[1.5em] h-[1.5em] rounded-md border-gray-500 hover:shadow-inner"
          onClick={() =>
            setActiveIdx(activeIdx === lastIdx ? 0 : activeIdx + 1)
          }
        >
          ▶️
        </button>
      </div>
    </div>
  );
}

export default Slider;
