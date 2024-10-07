import React, { useState, useEffect } from "react";
import Project from "../screens/Project";
import ProjectSliderImgs from "../utils/ProjectSliderImg.js";

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
    <div className="relative {border-[2px]} w-[90%] h-[80vh] flex flex-col gap-2 justify-center items-center ">
      {/* Project Card  */}

      <div className=" py-[1vw] w-[50%] h-[65vh] {border-[3px]  border-green-500 } flex flex-col  gap-4 justify-between border-b-[2px] border-t-[2px] border-solid border-b-yellow-600 border-t-blue-600 rounded-2xl transition-all duration-2000 ease-in-out   shadow-b hover:shadow-t ">
        <div>
          {ProjectSliderImgs.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`w-full {border-b-[2px]} flex flex-col justify-center gap-2 ${
                  activeIdx === idx ? " inline-block " : " hidden  "
                }`}
              >
                <h1 className="text-[2.2vw] text-center font-semibold">
                  {item.title}
                </h1>
                <div className="">
                  <img
                    className=" mx-auto w-[23em] h-[10em] rounded-2xl object-fill "
                    src={item.img}
                    alt={item.alt}
                    srcSet=""
                  />
                </div>
                <div className="{border-[2px] }w-[100%] h-[13em] text-xs text-justify text-white p-[1.1vw] overflow-hidden">
                  <p className="text-blue-500 mb-2 font-extrabold">
                    Project Description{" "}
                    <span className="text-yellow-400">:</span>
                  </p>
                  <p className="">{item.desc}</p>
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
        <div className="  {border-[2px]} flex gap-4 justify-center items-center">
          {ProjectSliderImgs.map((slide, idx) => (
            <div
              //   className= {activeIdx===idx ? "w-[2em] h-[2em] bg-white " : "w-[2em] h-[2em] bg-black"}
              key={idx}
              className={`w-[1.3em] h-[1.3em] border-[3px] border-b-blue-500 border-t-yellow-400  rounded-[50%]  ${
                activeIdx === idx ? "bg-yellow-600" : ""
              }`}
              // onClick={(idx) => {
              //   //   e.StopPropagation();
              //   setActiveIdx(idx);
              // }}
            ></div>
          ))}
        </div>
      </div>

      {/* Arrow Buttons */}
      <div className=" absolute z-[1000] {border-[3px] } w-[70%]  text-[3vw] flex justify-between items-center">
        <button
          className=" w-[1.5em] h-[1.5em] rounded-md border-gray-500 hover:shadow-inner hover:shadow-yellow-200"
          onClick={() =>
            setActiveIdx(activeIdx === 0 ? lastIdx : activeIdx - 1)
          }
        >
          ◀️
        </button>
        <button
          className="w-[1.5em] h-[1.5em] rounded-md border-gray-500 hover:shadow-inner hover:shadow-yellow-200"
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
