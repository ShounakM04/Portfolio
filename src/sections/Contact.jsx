import { Element } from "react-scroll";
import { links } from "../constants/index.jsx";
import { BackgroundBeamsWithCollision } from "../components/ui/Background-Beams-With-Collision.jsx";
import { Spotlight } from "../components/ui/Spotlight.jsx";
// import { MovingBorder } from "../components/ui/MovingBorder.jsx";
const Contact = () => {
  return (
    <section id="Contact" className="pl-4 mt-[20%]">
      
      <Element name="Contact" className="relative">
      <Spotlight
          className="top-100 -left-1 md:-left-54 md:-bottom-40 h-screen -z-10"
          fill="purple"
        />
        <BackgroundBeamsWithCollision>
        
          <div className="container bg-transparent mt-10">
            {/* Section Title */}
            <div className="caption-aboutme uppercase text-p2 mb-8">
              CONTACT
            </div>
            
            {/* Social Media Links */}
            <div className="relative p-8 border-2 border-s3 rounded-7xl g7 mt-[5%] mb-[15%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {links.map(({ platform, url, icon }, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 border border-s3 rounded-3xl hover:shadow-md transition-all bg-s1"
                  >
                    {/* Social Media Icon */}
                    <img
                      src={icon}
                      alt={platform}
                      className="w-10 h-10 object-contain"
                    />

                    {/* Platform Name */}
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-p4 hover:text-p1 transition-all"
                    >
                      <span className="text-lg font-semibold">{platform}</span>

                      {/* Arrow Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-p4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m-6-6 6 6-6 6"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </BackgroundBeamsWithCollision>
      </Element>
    </section>
  );
};

export default Contact;
