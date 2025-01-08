import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-155}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 transform md:rotate-90 origin-center"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header className="absolute md:fixed flex md:flex-col z-50 bg-transparent md:h-screen h-24 left-0 w-full md:w-28 overflow-hidden box-border mt-4 sm:mt-4 lg:ml-4 ml-6">
      <div className="flex flex-col md:justify-between md:items-center md:h-full h-auto relative md:mt-10 sm:m-0 sm:p-0">
        <div className="flex md:flex-col flex-row justify-between items-center w-full md:w-auto md:gap-24 gap-4 p-4 md:p-0 sm:m-0 sm:p-0">
          <ul className="flex md:flex-col flex-row md:items-center md:gap-32 gap-6 md:mt-20 mt-0 w-full m-0 p-0">
            <li className="linkAnimation cursor-pointer md:-rotate-90 dark:text-white text-black relative">
              <LinkScroll onClick={() => setIsOpen(false)} to="About Me" smooth spy offset={-85} activeClass="nav-active" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 transform md:rotate-90 origin-center">
                About Me
              </LinkScroll>
            </li>
            <li className="linkAnimation cursor-pointer md:-rotate-90 dark:text-white text-black relative">
            <LinkScroll onClick={() => setIsOpen(false)} to="Skills" smooth spy offset={-90} activeClass="nav-active" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 transform md:rotate-90 origin-center">
                Skills
              </LinkScroll>
            </li>
            <li className="linkAnimation cursor-pointer md:-rotate-90 dark:text-white text-black relative">
            <LinkScroll onClick={() => setIsOpen(false)} to="Projects" smooth spy offset={20} activeClass="nav-active" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 transform md:rotate-90 origin-center">
                Projects
              </LinkScroll>
            </li>
            <li className="linkAnimation cursor-pointer md:-rotate-90 dark:text-white text-black relative">
            <LinkScroll onClick={() => setIsOpen(false)} to="Contact" smooth spy offset={-155} activeClass="nav-active" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 transform md:rotate-90 origin-center">
                Contact
              </LinkScroll>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
