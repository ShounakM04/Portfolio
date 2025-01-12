import { Element } from "react-scroll";
import Button from "../components/Button.jsx";
import { education, experience } from "../constants/index.jsx";
import { Spotlight } from "../components/ui/Spotlight.jsx";
const Features = () => {
  return (
    <section className="pl-4">
      <Element name="About Me">
        <div className="container-aboutme">
          {/* Introduction Section */}

          <div className="caption-aboutme uppercase text-p2">ABOUT ME</div>

          <h6 className="ml-4 text-2xl text-p4 mb-2 font-semibold">
            Introduction
          </h6>
          <div className="relative mb-10 p-8 border-2 border-s3 rounded-7xl g7" >
            <div className="text-xl ">
              I am Shounak Mulay, an IT undergraduate passionate about
              full-stack development, cloud technologies, and creating scalable
              solutions. With a knack for problem-solving and innovation, I
              thrive on crafting impactful applications.
            </div>
          </div>

          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[20%] left-[17%] w-[70%] h-[25%] bg-gradient-to-r from-p1 to-transparent opacity-[14%] blur-3xl rounded-[100%]"></div>
          </div>
          {/* Education Section */}
          <h2 className="ml-4 text-2xl text-p4 mb-2 font-semibold">
            Education
          </h2>
          <div className="relative mb-10 p-8 border-2 border-s3 rounded-7xl g7 bg-s1/10">
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
            </div>
            <ul className="space-y-5">
              {education.map(({ id, institution, degree, timeline }) => (
                <li key={id} className="text-xl">
                  <h3 className="">{degree}</h3>
                  <p>{institution}</p>
                  <span className="text-sm text-s3">{timeline}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="ml-4 text-2xl text-p4 mb-2 font-semibold">
            Experience
          </h2>
          {/* Features Section */}

          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {experience.map(({ id, position, title, text, button }) => (
              <div
                key={id}
                className="text-xl relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <h2 className="max-w-400 font-semibold text-p4 max-md:mb-6 max-md:h5 text-2xl leading-[36px] mt-10">
                  {position}
                </h2>
                <span className="sm:text-sm md:text-lg font-semibold mb-3">{title}</span>

                <p className="mb-11 max-md:mb-8 max-md:body-3 text-[80%]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
