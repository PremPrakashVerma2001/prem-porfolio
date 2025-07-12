import React from "react";

import SocialImgs from "../utils/SocialMedia.js";

const SocialMedia = () => {
  return (
    <div className=" {border-[2px] }h-[50vh] flex flex-col gap-10 fixed bottom-3 right-6">
      {SocialImgs.map((item, idx) => {
        return (
          <div className="hover:scale-110 active:scale-75" key={idx}>
            <a href={item.link} target="_blank">
              <img
                className=" w-[3vmax] h-[3vmax] rounded-[50%]  "
                src={item.img}
                alt=""
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
