import sagaImg from "../img/sagacious_img.jpeg";

import "../media/experience.css";

function Experience() {
  return (
    <section
      id="experience"
      className="h-[100vh] {border-[2px]  bg-gray-800/70} flex flex-col justify-evenly  items-center"
    >
      <div className="flex flex-wrap justify-center items-center gap-1">
        <img
          className="w-[3.8vw] h-[3.8vw] rounded-[50%]"
          src="https://img.icons8.com/?size=100&id=111405&format=png&color=000000"
          alt="skill_img"
          loading="lazy"
        />
        <h1 className="text-[2.1vw]">
          EXPER<span className="text-blue-500">IENCE</span>
        </h1>
      </div>
      <div className="p-[2vw] border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl w-[60%] mx-auto  shadow-t hover:shadow-b">
        <div>
          <div className=" Heading flex justify-between items-center p-[1.1vw]">
            <div className="  flex gap-2 items-center">
              <img className="w-[40px] h-[40px] rounded-[50%]" src={sagaImg} />
              <h1 className="text-[2.2vmax]">Sagacious IP</h1>
            </div>
            <hr className="w-[10vw] bg-gray-50" />
            <p className="text-[1.3vw]">July 2024 - Aug-2024</p>
          </div>
          <div className="text-[1.3vw]  text-justify text-white flex flex-col gap-4 p-2">
            <p className="text-[1.5vw] ml-1 text-blue-500 "> Patent Analyst</p>
            <p>
              ╰┈➤Reviewed and studied upto 10 patent documents, ensuring a
              thorough understanding of the claims, prior art, and legal
              implications for accurate assessment of potential infringement.
            </p>
            <p>
              ╰┈➤Conducted in-depth analysis of 7+ patent infringement cases,
              including detailed claim mapping and comparative product feature
              analysis.
            </p>
            <p>╰┈➤Tools: Google Patents | MS word | MS powerpoint | OneNote</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
