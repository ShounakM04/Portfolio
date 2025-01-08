import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import Button from "../components/Button.jsx";
import { skills } from "../constants/index.jsx"; // Import skills data

const Skills = () => {
  return (
    <section id="Skills">
      <Element name="Skills">
        <div className="container">
          <div className="caption-aboutme uppercase mt-[20%] text-p2">
            SKILLS
          </div>
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[50%] left-[20%] w-[70%] h-[15%] bg-gradient-to-r from-p1 to-transparent opacity-[16%] blur-3xl rounded-[100%]"></div>
          </div>
          {/* Skills Grid Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-md:gap-4 mt-[10%] mb-[20%]">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 border-2 border-s3 rounded-3xl bg-s1/20"
              >
                <img
                  src={`/images/${skill.imageSrc}`} // Assuming images are in the /images folder
                  alt={skill.title}
                  className="w-16 h-16 object-contain mb-4"
                />
                <p className="text-center font-semibold text-p4">
                  {skill.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Skills;
