import { Element } from "react-scroll";
import Button from "../components/Button.jsx";
import { Spotlight } from "../components/ui/Spotlight.jsx";

const Hero = () => {
  return (
    <>
  {/* Spotlights for Mobile (visible only on small screens) */}
  
    
  <section className="relative w-full pt-36 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 overflow-x-none">
    {/* Spotlights for Desktop (visible only on medium screens and larger) */}
    <Spotlight
      className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen -z-10"
      fill="white"
    />
    <Spotlight
      className="hidden sm:block h-[100vh] w-[50vw] top-10 left-[80%]"
      fill="purple"
    />
    <Spotlight
      className="hidden sm:block left-80 top-28 h-[80vh] w-[50vw] -z-10"
      fill="blue"
    />

    {/* Add a blurry streak in the background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-[24%] left-[11%] w-[70%] h-1/3 bg-gradient-to-r from-p1 to-transparent opacity-[19%] blur-3xl rounded-[100%]"></div>
    </div>
    
    <Element>
      <div className="container flex flex-col-reverse sm:flex-row">
        <div className="z-2 max-w-700 max-lg:max-w-550 lg:ml-[1%] md:ml-[15%] mt-10">
          <div className="caption uppercase text-p2">Hello, Myself</div>
          <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            Shounak Mulay
          </h1>
          <p className="max-w-440 mb-14 body-1 max-md:mb-10">
            I am an IT undergraduate with a keen interest in full stack web
            development and creating dynamic and scalable web applications.
          </p>
          <a
            href="https://drive.google.com/file/d/1VxEBCWR_2Ahg36nL4x97nNfOhlIgCCf1/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Resume</Button>
          </a>
        </div>

        <div className="w-[300px] h-[300px] sm:w-[520px] sm:h-[470px] rounded-full overflow-hidden border-4 border-p2 pointer-events-none sm:mt-0 sm:ml-6 sm:mr-0 mx-auto sm:mx-0">
          <img
            src="/images/heroImage.png"
            className="w-full h-full object-cover"
            alt="hero"
          />
        </div>
      </div>
    </Element>
  </section>
</>

  );
};

export default Hero;
