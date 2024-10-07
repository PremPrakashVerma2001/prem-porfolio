import img1 from "../img/img1.jpg";

import "../media/navbar.css";

function Navbar() {
  return (
    <nav className=" NavBar flex justify-between items-center h-[10vh] w-full z-[100000] font-extrabold {bg-[#353535]} fixed top-2 rounded-b-lg">
      <div className=" flex w-1/2 h-full justify-start items-center gap-4 ml-[6vw]">
        <img
          className="w-[5vmax] h-[5vmax] rounded-[50%]"
          src={img1}
          alt="logo"
        />
        <h1 className="text-[1.5vw] p-[1vw] ">
          PORT<span className="text-blue-500">FOLIO</span>
        </h1>
      </div>
      <div className="MenuContainer m-auto">
        <ul className="Menu flex flex-wrap text-[1.5vw] justify-center items-center gap-4 p-[.5vw] border-b-[2px] border-t-[2px] border-solid border-b-yellow-600 border-t-blue-600 rounded-2xl ">
          <a href="#home">
            <li className="basis-1/12 hover:text-yellow-600 ">Home</li>
          </a>
          <a href="#about">
            <li className="basis-1/12 hover:text-yellow-600">About</li>
          </a>
          <a href="#project">
            <li className="basis-1/12 hover:text-yellow-600">Project</li>
          </a>
          <a href="#experience">
            <li className="basis-1/12 hover:text-yellow-600">Experience</li>
          </a>
          <a href="#contact">
            <li className="basis-1/12 hover:text-yellow-600">Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
