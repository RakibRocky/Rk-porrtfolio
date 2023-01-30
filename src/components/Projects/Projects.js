import React from "react";
import myProjects from "./myProjects";

const Projects = () => {
  return (
    <div className="mb-5">
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-10">
          <div className="flex flex-col  w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Apps I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo facilis repellat ab cupiditate alias vero aliquid
              obcaecati quisquam fuga dolore.
            </p>
          </div>
          <div
            className="flex flex-col lg:flex-row lg:w-full w-full  m-4 "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {myProjects.map((project) => (
              <a
                href={project.link}
                key={project.id}
                className="w-full md:w-100 p-2"
              >
                <div className="flex flex-row relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.img}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.name}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
