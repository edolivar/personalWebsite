import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

const Social = () => {
  return (
    <div className="hidden md:fixed md:bottom-0 md:z-10 md:block md:w-32 ">
      <ul className=" flex flex-col items-center space-y-6 after:block after:h-28 after:w-0.5 after:bg-white">
        <li>
          <a
            href="https://github.com/edolivar"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub
              className="cursor-pointer text-white transition-transform hover:-translate-y-1 "
              size={25}
            />
          </a>
        </li>

        <li className="last:pb-6">
          <a
            href="https://www.linkedin.com/in/edwin-jim-olivares-3914811a1//"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin
              className="cursor-pointer text-white transition-transform hover:-translate-y-1 "
              size={25}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
