import React, { useEffect, useState } from "react";
import "../AnimatedLetters/Animate.scss";
import AnimatedLetters from "../AnimatedLetters/Animate";
import "animate.css";
import { themes } from "../../theme";
import FeelingProud from "../../miniComponents/greetings/FeelingProud";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["R", "o", "c", "k", "y"];
  const jobArray = [
    "I",
    " ",
    "love",
    " ",
    "to",
    " ",
    "build",
    " ",
    "amazing",
    " ",
    "Web",
    " ",
    "App",
    ".",
  ];

  useEffect(() => {
    const autoAni = () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 5000);
    };
    return autoAni;
  }, []);

  return (
    <div>
      <section id="about">
        <div className="container  flex px-10 py-20 lg:flex-row flex-col-reverse items-center justify-around gap-5">
          <div
            className=" flex-1 lg:flex-grow md:w-full 
            flex flex-col md:items-start md:text-left  mb-16 md:mb-0 items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>{" "}
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>{" "}
              <AnimatedLetters
                letterClass={letterClass}
                nameArray={nameArray}
                idx={15}
              ></AnimatedLetters>{" "}
              <br className="hidden lg:inline-block" />
              <AnimatedLetters
                letterClass={letterClass}
                nameArray={jobArray}
                idx={20}
              ></AnimatedLetters>
            </h1>
            <p className="mb-8 leading-relaxed">
              I have a passion for building modern, interactive web applications
              and I'm always eager to learn new technologies.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 
                                border-0 py-2 px-6 focus:outline-none hover:bg-green-600 
                                rounded text-sm md:text-md xl:text-lg"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 
                                 bg-gray-800 border-0 py-2 px-6 focus:outline-none
                                  hover:bg-gray-700 hover:text-white rounded text-sm md:text-md xl:text-lg"
              >
                See My Past Work
              </a>
            </div>
          </div>
          <div className=" flex-1 ">
            <div className="  md:w-48  w-fit">
              <FeelingProud theme={themes}></FeelingProud>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
