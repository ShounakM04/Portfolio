import { Element } from "react-scroll";
import { useState } from "react";
import Button from "../components/Button.jsx";
import { skills } from "../constants/index.jsx"; // Import skills data
import MagicButton from "../components/MagicButton.jsx";

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
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-6 lg:gap-8 mt-[8%] mb-[20%] md:grid-cols-3 lg:grid-cols-6 gap-6 max-md:gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex justify-center">
                <MagicButton
                  title={skill.title}
                  icon={skill.imageSrc} // Assuming imageSrc holds the image for each skill
                  otherClasses="flex flex-col items-center justify-center p-4 border-2 border-s3 rounded-3xl bg-s1/20"
                />
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Skills;
