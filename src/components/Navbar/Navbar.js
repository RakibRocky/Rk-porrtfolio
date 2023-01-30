import React from "react";
import rockymin from "./../../assetes/img/rockymin.png";

import "animate.css";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="md:sticky top-0 z-10">
      <header className="bg-gray-800 md:sticky sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap pl-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white  md:mb-0">
            <a href="#about" className=" text-xl">
              <img
                className="mt-2 rocky animate_animated animate__bounce      "
                src={rockymin}
                alt=""
                srcset=""
              />
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-end">
            <a href="#projects" className="mr-5 hover:text-white">
              Past Work
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
            <a href="#contact" className="mr-5 hover:text-white">
              Hire Me
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
