import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
// import Animate from "animate.css-react";

// import "animate.css/animate.css";

import css from "../../assetes/icons/css.svg";
import {
  faBellSlash,
  faUser,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
// import { faJs } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div id="skills">
      <div data-aos="fade-up" data-aos-duration="3000">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Technical Skills
        </h1>
      </div>

      <div className="mt-8 flex flex-col lg:flex-row items-center text-center justify-center  w-fit   gap-5 py-30 m-auto">
        {/* ...........LEFT SIDE......... */}
        <div
          className=""
          // className=""
          // data-aos="fade-right"
          // // data-aos-offset="300"
          // data-aos-duration="3000"
          // data-aos-easing="ease-in-sine"
        >
          <div>
            {" "}
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-5 mb-5">
              <div
                data-aos="fade-right"
                // data-aos-offset="300"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
              >
                {" "}
                <Skill
                  iconName={"Html5"}
                  icon={
                    <SiHtml5
                      style={{
                        borderRadius: "6px",
                        // color: "red",
                        color: " #fa4909",
                      }}
                      size={80}
                    ></SiHtml5>
                  }
                ></Skill>
              </div>
              <div
                data-aos="fade-right"
                // data-aos-offset="1000"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                {" "}
                <Skill
                  iconName={"Css3"}
                  icon={
                    <SiCss3
                      style={{
                        borderRadius: "6px",
                        color: "#00aeff",
                      }}
                      size={80}
                    ></SiCss3>
                  }
                ></Skill>
              </div>{" "}
            </div>
            {/* .........left second two cards............. */}
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row  gap-5 mb-5">
              {" "}
              <div data-aos="fade-up-right" data-aos-duration="2000">
                <Skill
                  iconName={"Bootstrap"}
                  icon={
                    <SiBootstrap
                      style={{
                        borderRadius: "6px",
                        // color: "#563d7c",
                        color: "#ff7db8",
                      }}
                      size={80}
                    ></SiBootstrap>
                  }
                ></Skill>
              </div>
              <div data-aos="fade-up-right" data-aos-duration="1000">
                <Skill
                  iconName={"Tailwindcss"}
                  icon={
                    <SiTailwindcss
                      style={{
                        borderRadius: "6px",
                        color: "#3490dc",
                      }}
                      size={80}
                    ></SiTailwindcss>
                  }
                ></Skill>
              </div>{" "}
            </div>
          </div>
          {/* <div className=" flex flex-row gap-5  lg:flex-row  lg:block xl:hidden ">
            <div
              className="hidden lg:block"
              data-aos="fade-left"
              // data-aos-offset="300"
              data-aos-duration="2000"
              data-aos-easing="ease-in-sine"
            >
              {" "}
              <Skill
                iconName={"React"}
                icon={
                  <SiReact
                    style={{
                      borderRadius: "6px",
                      color: "#61DBFB",
                    }}
                    size={80}
                  ></SiReact>
                }
              ></Skill>
            </div>
            <div
              className="hidden lg:block"
              data-aos="fade-left"
              // data-aos-offset="300"
              data-aos-duration="2000"
              data-aos-easing="ease-in-sine"
            >
              {" "}
              <Skill
                iconName={"React"}
                icon={
                  <SiReact
                    style={{
                      borderRadius: "6px",
                      color: "#61DBFB",
                    }}
                    size={80}
                  ></SiReact>
                }
              ></Skill>
            </div>
          </div> */}
          {/* .................left first two cards............... */}
        </div>
        {/* ............RIGHT SIDE CARDS....... */}
        <div>
          {/* ............Right side firs two cards............ */}
          <div className="flex flex-col sm:flex-row md:flex-row   gap-5 mb-5">
            <div
              data-aos="fade-left"
              // data-aos-offset="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              {" "}
              <Skill
                iconName={"JavaScript"}
                icon={
                  <SiJavascript
                    style={{
                      borderRadius: "6px",
                      color: "yellow",
                    }}
                    size={80}
                  ></SiJavascript>
                }
              ></Skill>
            </div>
            <div
              className="xl:block lg:hidden"
              data-aos="fade-left"
              // data-aos-offset="300"
              data-aos-duration="2000"
              data-aos-easing="ease-in-sine"
            >
              {" "}
              <Skill
                iconName={"React"}
                icon={
                  <SiReact
                    style={{
                      borderRadius: "6px",
                      color: "#61DBFB",
                    }}
                    size={80}
                  ></SiReact>
                }
              ></Skill>
            </div>{" "}
          </div>
          {/* .............Right side second two cards....... */}
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-wrap  gap-5 mb-5">
            <div data-aos="fade-up-left" data-aos-duration="2000">
              {" "}
              <Skill
                iconName={"Git"}
                icon={
                  <SiGit
                    style={{
                      borderRadius: "6px",
                      color: "#F1502F",
                    }}
                    size={80}
                  ></SiGit>
                }
              ></Skill>
            </div>
            <div
              className="lg:hidden xl:block"
              data-aos="fade-up-left"
              data-aos-duration="3000"
            >
              {" "}
              <Skill
                iconName={"Next.js"}
                icon={
                  <SiNextdotjs
                    style={{
                      borderRadius: "6px",
                      color: "white",
                    }}
                    size={80}
                  ></SiNextdotjs>
                }
              ></Skill>
            </div>{" "}
          </div>
        </div>
      </div>
      {/* ..........Extra card...... */}
      <div className=" flex  gap-5 mx-auto justify-center py-30   xl:hidden ">
        <div
          className="hidden lg:block"
          data-aos="fade-right"
          // data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
        >
          {" "}
          <Skill
            iconName={"React"}
            icon={
              <SiReact
                style={{
                  borderRadius: "6px",
                  color: "#61DBFB",
                }}
                size={80}
              ></SiReact>
            }
          ></Skill>
        </div>
        <div
          className="hidden lg:block"
          data-aos="fade-left"
          // data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
        >
          {" "}
          <Skill
            iconName={"Next.js"}
            icon={
              <SiNextdotjs
                style={{
                  borderRadius: "6px",
                  color: "white",
                }}
                size={80}
              ></SiNextdotjs>
            }
          ></Skill>
        </div>
      </div>
    </div>
  );
};

export default Skills;
