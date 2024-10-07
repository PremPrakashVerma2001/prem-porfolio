import React from "react";

import "../media/contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="{border-[3px]} h-[100vh] text-center flex flex-col gap-12 justify-center items-center"
    >
      <div className="flex flex-wrap justify-center items-center mt-4 gap-1">
        <img
          className="w-[3.8vw] h-[3.8vw] rounded-[50%]"
          src="https://img.icons8.com/?size=100&id=91299&format=png&color=000000"
          alt="skill_img"
          loading="lazy"
        />
        <h1 className="text-[2.1vw] flex gap-2">
          GET IN <span className="text-blue-500">TOUCH</span>
        </h1>
      </div>
      <div className="ContactContainer {border-[3px] border-fuchsia-400} w-[90%]  flex ">
        {/* <div className=" FormContainer w-[100%] border-2"> */}
        <form className=" w-[60%] flex flex-col gap-4" autoComplete="off">
          <div>
            {/* <label htmlFor="fullName">Name</label> */}
            <input
              className=" w-[80%] bg-transparent outline-none border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl placeholder:text-sm font-extrabold p-[1vw] focus:border-b-yellow-600 "
              type="text"
              name="fullName"
              // value=""
              placeholder="Full Name"
              // required
              // size="20"
              maxLength={15}
              autoComplete="off"
              // autoFocus
            />
          </div>
          <div>
            {/* <lable>Email</lable> */}
            <input
              className=" w-[80%] bg-transparent outline-none border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-500 rounded-2xl placeholder:text-sm font-extrabold p-[1vw] focus:border-b-yellow-600  "
              type="email"
              name="email"
              // value=""
              placeholder="abc@domain.com"
              // required
              // size="20"
              maxLength={15}
              autoComplete="off"
              // autoFocus
            />
          </div>
          <div>
            {/* <label>Message</label> */}
            <textarea
              className=" w-[80%] bg-transparent outline-none border-b-[2px] border-b-yellow-300 border-t-[2px] border-t-blue-600 rounded-2xl placeholder:text-sm font-extrabold p-[1vw] focus:border-b-yellow-600 "
              name="message"
              rows={4}
              cols={30}
              placeholder="Write your message..."
              // required
              minLength={10}
              maxLength={500}
              autoComplete="off"
            ></textarea>
          </div>
          <div className=" w-[80%] mx-auto flex border-y-[2px] border-b-yellow-300 border-t-blue-500 p-2 rounded-2xl ">
            <label className=" text-white  cursor-pointer " htmlFor="myfile">
              🔗 Upload files
            </label>
            <input
              className="hidden"
              type="file"
              name="myfile"
              id="myfile"
              multiple
              // placeholder="Attach document"
            />
          </div>
          <div className="flex justify-evenly">
            {/* <button className="border-y-[2px] border-b-yellow-300 border-t-blue-500 p-2 rounded-2xl text-white text-xl text-md hover:shadow-blue-500">
                <label className="cursor-pointer " htmlFor="reset">
                  ↻ Reset{" "}
                </label>
                <input
                  className="hidden"
                  type="reset"
                  name="reset"
                  id="reset"
                />
              </button> */}
            <button className="border-y-[2px] border-b-yellow-300 border-t-blue-500 p-[.7vw] rounded-2xl text-white text-[1.5vw] hover:shadow-b">
              Send ➤
            </button>
          </div>
        </form>
        {/* </div> */}
        <div className="w-[50%] text-center mx-auto">
          <div className=" flex flex-col  gap-4 ">
            <iframe
              className=" w-[100%] h-[13em] border-y-[2px] border-b-yellow-300 border-t-blue-500 rounded-3xl shadow-xl shadow-yellow-500/20"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55967.195221496244!2d77.15508006702358!3d28.75091867727053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01d4f896099f%3A0xd856071fa2f0c441!2sBurari%2C%20Delhi%2C%20110084!5e0!3m2!1sen!2sin!4v1727628113308!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p> ⚲ Burari, Delhi-110084</p>
          </div>
          <div className="mt-4">
            <code> 🖂 ppverma.verma12@gmail.com</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
