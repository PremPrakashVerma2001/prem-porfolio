// import dtuImg from "../img/dtu_logo.png";
// import xiiImg from "../img/12th_img.jpeg";
// import xImg from "../img/X_img.jpeg";

import Academics from "../utils/Academics.js";
import Skills from "../utils/Skills.js";

import "../media/about.css";

function About() {
  return (
    <section
      id="about"
      className="text-center {h-[100vh]} {border-[2px]} flex flex-col gap-4 p-8"
    >
      <div className="SkillContainer">
        <div className="flex items-center justify-center gap-1 flex-wrap mb-6">
          <img
            className="w-[3.3vmax] h-[3.3vmax] rounded-[50%]"
            src="https://img.icons8.com/?size=100&id=VULRKZEtqCVL&format=png&color=000000"
            alt="skill_img"
            loading="lazy"
          />
          <h1 className="text-[2.1vmax]">
            SKI<span className="text-blue-500">LLS</span>{" "}
          </h1>
        </div>
        <div className=" {border-[3px]} w-[100%] mx-auto grid grid-cols-3 gap-6 p-2 items-center text-[1.3vmax]">
          {Skills.map((skill, idx) => {
            return (
              <div key={idx} className="">
                <h1>{skill.name}</h1>
                <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl p-1 ">
                  <div
                    className={`h-[3vh] ${skill.barClass} rounded-2xl  text-black font-extrabold  flex items-center  justify-end p-1`}
                  >
                    <p className="text-[1vmax]">{skill.percent}%</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" AcademicsContainer {h-[40vh]} {border-[2px] border-yellow-500}">
        <div>
          <div className="flex flex-wrap gap-1 items-center justify-center mb-6">
            <img
              className="w-[3.8vmax] h-[3.8vmax] rounded-[50%]"
              src="https://img.icons8.com/?size=100&id=109679&format=png&color=000000"
              alt="acad_logo"
              loading="lazy"
            />
            <h1 className="text-[2.1vmax] ">
              ACADE<span className="text-blue-500">MICS</span>
            </h1>
          </div>
          <div className=" Academics flex flex-wrap justify-evenly items-center h-[100%]  ">
            {Academics.map((items, idx) => {
              return (
                <div
                  key={idx}
                  className=" Acard text-left text-[1.2vmax] p-2 w-[28vmax] border-b-[2px] border-b-yellow-300  border-t-[2px] border-t-blue-500 rounded-2xl shadow-b  hover:shadow-t overflow-hidden "
                >
                  <div className="flex justify-center items-center mb-2">
                    <img
                      className="w-[6em] h-[6em] rounded-[50%] object-cover"
                      src={items.img}
                      alt={items.title}
                    />
                  </div>
                  <div className="flex flex-col flex-wrap justify-center items-center gap-2">
                    <h2 className="text-blue-500">{items.title}</h2>
                    <h2>{items.name}</h2>
                    <p>{items.duration}</p>
                    <p>
                      CGPA <span className="text-blue-500">:</span>{" "}
                      <strong>{items.CGPA}</strong>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
