import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="flex h-16 flex-col items-center justify-center md:hidden">
        <ul className="flex flex-row items-center space-x-6">
          <li>
            <a
              href="https://github.com/edolivar"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub
                className="cursor-pointer text-white  transition-transform hover:-translate-y-1 "
                size={25}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/edwin-jim-olivares-3914811a1//"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin
                className="cursor-pointer text-white  transition-transform hover:-translate-y-1"
                size={25}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
