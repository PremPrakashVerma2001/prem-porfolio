import mainImg2 from "../img/main_img2.png";

import "../media/home.css";

function Home() {
  function openResume() {
    window.open(
      "https://drive.google.com/file/d/1F_uHKkfS8lPtSjHIVwqsJCgTQhLzEW9Y/view?usp=sharing"
    );
  }
  return (
    <>
      <main
        id="home"
        className=" Main flex justify-between items-center h-[110vh] {border-[3px] border-white} {w-[90%] m-auto} "
      >
        <div className=" MainLeft {border-[3px] border-green-300} w-[50%] h-[100%]">
          <div className="Heading">
            <h1 className="text-[3.5vw] mt-32 ml-12 flex gap-2">
              Moshi Moshi{" "}
              <p className="animate-waving-hand origin-[75%_75%] text-[3.5vw]">
                👋
              </p>
            </h1>
          </div>
          <br></br>
          <h2 className="text-[2vw] mt-3 ml-12">Myself Prem Praskash Verma</h2>

          <p className="text-[1.3vw] text-justify mt-3 ml-12 text-white">
            <br></br>
            <span className="text-blue-500">Welcome to My portfolio ! </span>
            <br />
            <br></br>
            I'm a passionate Software Engineer navigating the vast ocean of web
            development. With every project, I dive deeper into innovative
            solutions, continuously learning and evolving. My journey is fueled
            by curiosity and a commitment to mastering new technologies every
            day.
          </p>

          <div className="{border-[3px] border-green-300} mt-8 flex justify-evenly">
            <button className="border-y-[2px] border-b-blue-500 border-t-yellow-600 p-[.8vw] rounded-2xl text-white text-[1.5vw] hover:shadow-md hover:shadow-blue-500 ">
              <a href="#about">
                Explore <span>➡️</span>
              </a>
            </button>
            <button
              onClick={openResume}
              className="border-y-[2px] border-b-yellow-600 border-t-blue-500 p-[.8vw] rounded-2xl text-white text-[1.5vw] hover:shadow-b"
            >
              Resume 📄
            </button>
          </div>
        </div>
        {/* <div className="{border-[3px] border-red-300 } w-[50%] h-[100%] grid items-center ">
          <img
            className="h-[25em] border-b-[3px] border-b-yellow-600 border-t-[3px] border-t-blue-400 rounded-[50%] mx-auto my-0 "
            src={mainImg2}
            alt="main-image"
          />
        </div> */}
        <div className="{border-[3px] border-red-300 } w-[50%] h-[100%] flex justify-center items-center  ">
          <div className="w-[55%] h-[55%]">
            <img
              className="object-cover border-b-[3px] border-b-yellow-600 border-t-[3px] border-t-blue-400 rounded-[50%] mx-auto my-0 "
              src={mainImg2}
              alt="main-image"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
