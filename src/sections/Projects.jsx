import { Element } from "react-scroll";
import { projects } from "../constants/index.jsx"; // Ensure you have the projects array in your constants
import { Spotlight } from "../components/ui/Spotlight.jsx";
import MagicButton1 from "../components/MagicButton1.jsx";

const Projects = () => {
  return (
    <section id="Projects" className="pb-[5%] relative">
      <Element name="Projects" className="relative">
        <Spotlight
          className="top-100 -left-100 md:-left-54 md:-bottom-40 h-screen -z-10"
          fill="white"
        />
        {/* <Spotlight
      className="hidden sm:block left-80 top-28 h-[80vh] w-[50vw]"
      fill="blue"
    /> */}
        <div className="container relative z-2 py-28">
          <div className="caption-aboutme uppercase text-p2">PROJECTS</div>

          {/* Background Gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[2%] left-[5%] w-[90%] h-[70%] bg-gradient-to-r from-p1 to-transparent opacity-[15%] blur-3xl rounded-[100%]"></div>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {projects.map(
              ({ id, image, title, description, techStack, link }) => (
                <div
                  key={id} // Ensure the key is applied to the top-level element
                  className="card relative p-6 border-2 border-s3 rounded-7xl g7 hover:shadow-lg transition-all"
                >
                  {/* Project Image */}
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-51 object-cover rounded-3xl mb-4 border-2 border-s3"
                  />

                  {/* Project Title */}
                  <h3 className="text-2xl font-semibold text-p4 mb-2">
                    {title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-lg text-p4 mb-4">{description}</p>

                  {/* Tech Stack Icons */}
                  <div className="flex mb-4">
                    {techStack.map((tech, idx) => (
                      <div
                        key={idx} // Ensure keys are unique here as well
                        className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-s3"
                      >
                        <img
                          src={tech.img}
                          alt={tech.name}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Project Link */}
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-p1 font-bold hover:underline flex items-center gap-2"
                  >
                    View Project
                    {/* Arrow Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m-6-6 6 6-6 6"
                      />
                    </svg>
                  </a>
                </div>
              )
            )}
          </div>

          {/* Bottom Background Gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[90%] left-[5%] w-[90%] h-[10%] bg-gradient-to-r from-p1 to-transparent opacity-[15%] blur-3xl rounded-[10%]"></div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Projects;
