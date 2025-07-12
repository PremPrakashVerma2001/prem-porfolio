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
        className="flex flex-wrap justify-evenly items-center h-[95vh] {border-[3px] border-white}  m-auto p-8 "
      >
        <div className=" MainLeft {border-[3px] border-green-300} w-[50%] ">
          <div className="Heading">
            <h1 className="text-[3.5vmax] px-10 flex gap-2">
              Moshi Moshi{" "}
              <p className="animate-waving-hand origin-[75%_75%] text-[3.5vmax]">
                👋
              </p>
            </h1>
          </div>
          <br></br>
          <h2 className="text-[2vmax] mt-3 px-10">
            Myself Prem Praskash Verma
          </h2>

          <p className="text-[1.5vmax]  leading-8 text-justify mt-3 px-10 text-white">
            <br></br>
            <span className="text-blue-500">
              <h3>Welcome to My portfolio ! </h3>
            </span>
            <br></br>
            I'm a passionate{" "}
            <strong className="text-yellow-500">Software Engineer</strong>{" "}
            navigating the vast ocean of web development. With every project, I
            dive deeper into innovative solutions, continuously learning and
            evolving. My journey is fueled by curiosity and a commitment to
            mastering new technologies every day.
          </p>

          <div className="{border-[3px] border-green-300} mt-8 flex flex-wrap justify-evenly items-center gap-2">
            <button className="border-y-[2px] border-b-blue-500 border-t-yellow-600 p-4 rounded-2xl text-white text-[1.5vmax] hover:shadow-md hover:shadow-blue-500 active:scale-90">
              <a href="#about">
                Explore <span>➡️</span>
              </a>
            </button>
            <button
              onClick={openResume}
              className="border-y-[2px] border-b-yellow-600 border-t-blue-500 p-4 rounded-2xl text-white text-[1.5vmax] hover:shadow-b active:scale-90"
            >
              Resume 📄
            </button>
          </div>
        </div>
        {/* <div className="{border-[3px] border-red-300 } {w-[50%] }{h-[100%]} flex justify-center items-center  "> */}
        <div className="ImgContainer {border-[3px] border-red-300} w-[50%] {h-[100%]} p-4">
          <img
            className=" w-[400px] h-[400px] border-b-[3px] border-b-yellow-600 border-t-[3px] border-t-blue-400 rounded-[50%] mx-auto my-0 "
            src={mainImg2}
            alt="main-image"
          />
        </div>
        {/* </div> */}
      </main>
    </>
  );
}

export default Home;
