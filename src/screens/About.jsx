// import dtuImg from "../img/dtu_logo.png";
// import xiiImg from "../img/12th_img.jpeg";
// import xImg from "../img/X_img.jpeg";

import Academics from "../utils/Academics.js";

import "../media/about.css";

function About() {
  return (
    <section
      id="about"
      className="text-center {h-[100vh]} {border-[2px]} flex flex-col gap-1"
    >
      <div className="{border-[3px]} h-[60vh]">
        <div>
          <div className="flex items-center justify-center gap-1 flex-wrap mb-4 ">
            <img
              className="w-[3.3vw] h-[3.3vw] rounded-[50%]"
              src="https://img.icons8.com/?size=100&id=VULRKZEtqCVL&format=png&color=000000"
              alt="skill_img"
              loading="lazy"
            />
            <h1 className="text-[2.1vw]">
              SKI<span className="text-blue-500">LLS</span>{" "}
            </h1>
          </div>
          <div className="SkillContainer {border-[3px]} w-[90%] mx-auto grid grid-cols-3 gap-6 items-center text-[1.3vw]">
            <div>
              <h1>HTML</h1>
              <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl ">
                <div className="w-11/12 h-[3vh] bg-orange-600 rounded-2xl text-right text-sm text-black font-extrabold">
                  90%
                </div>
              </div>
            </div>
            <div>
              <h1>CSS</h1>
              <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl ">
                <div className="w-9/12 h-[3vh] bg-blue-500  rounded-2xl text-right text-sm text-black font-extrabold">
                  75%
                </div>
              </div>
            </div>
            <div>
              <h1>JAVASCRIPT</h1>
              <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl ">
                <div className="w-10/12 h-[3vh] bg-yellow-500   rounded-2xl text-right text-sm text-black font-extrabold">
                  80%
                </div>
              </div>
            </div>
            <div>
              <h1>NODEJS</h1>
              <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl ">
                <div className="w-9/12 h-[3vh] bg-green-700  rounded-2xl text-right text-sm text-black font-extrabold">
                  75%
                </div>
              </div>
            </div>
            <div>
              <h1>MONGODB</h1>
              <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl ">
                <div className="w-8/12 h-[3vh] bg-green-500  rounded-2xl text-right text-sm text-black font-extrabold">
                  70%
                </div>
              </div>
            </div>
            <div>
              <h1>MYSQL</h1>
              <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl ">
                <div className="w-5/12 h-[3vh] bg-blue-300  rounded-2xl text-right text-sm text-black font-extrabold">
                  40%
                </div>
              </div>
            </div>
            <div>
              <h1>C++</h1>
              <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl ">
                <div className="w-11/12 h-[3vh] bg-blue-800   rounded-2xl text-right text-sm text-black font-extrabold">
                  90%
                </div>
              </div>
            </div>
            <div>
              <h1>JAVA</h1>
              <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl ">
                <div className="w-6/12 h-[3vh] bg-amber-800   rounded-2xl text-right text-sm text-black font-extrabold">
                  50%
                </div>
              </div>
            </div>
            <div>
              <h1>PYTHON</h1>
              <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl ">
                <div className="w-2/12 h-[3vh] bg-teal-500   rounded-2xl text-right text-sm text-black font-extrabold">
                  20%
                </div>
              </div>
            </div>
            <div>
              <h1>SQL</h1>
              <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl ">
                <div className="w-5/12 h-[3vh] bg-cyan-500   rounded-2xl text-right text-sm text-black font-extrabold">
                  40%
                </div>
              </div>
            </div>
            <div>
              <h1>TAILWIND</h1>
              <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl ">
                <div className="w-9/12 h-[3vh] bg-sky-400   rounded-2xl text-right text-sm text-black font-extrabold">
                  75%
                </div>
              </div>
            </div>
            <div>
              <h1>DSA</h1>
              <div className=" bg-slate-400/50  border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl ">
                <div className="w-9/12 h-[3vh] bg-rose-400   rounded-2xl text-right text-sm text-black font-extrabold">
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" AcademicsContainer {h-[40vh]} {border-[2px] border-yellow-500}">
        <div>
          <div className="flex flex-wrap gap-1 items-center justify-center mb-2">
            <img
              className="w-[3.8vw] h-[3.8vw] rounded-[50%]"
              src="https://img.icons8.com/?size=100&id=109679&format=png&color=000000"
              alt="acad_logo"
              loading="lazy"
            />
            <h1 className="text-[2.1vw] ">
              ACADE<span className="text-blue-500">MICS</span>
            </h1>
          </div>
          <div className=" Academics flex justify-evenly items-center h-[100%] mt-6 ">
            {Academics.map((items, idx) => {
              return (
                <div
                  key={idx}
                  className=" Acard text-left text-[1.2vw] p-[.5vw] w-[20vw] h-[13vw] border-b-[2px] border-b-yellow-300  border-t-[2px] border-t-blue-500 rounded-2xl shadow-b  hover:shadow-t overflow-hidden "
                >
                  <img
                    className="w-[4em] h-[4em] rounded-[50%] object-cover"
                    src={items.img}
                    alt={items.title}
                  />
                  <h2 className="text-blue-500">{items.title}</h2>
                  <p>{items.name}</p>
                  <p>{items.duration}</p>
                  <p>CGPA:{items.CGPA}</p>
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
