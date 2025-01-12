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
    <header className="absolute md:fixed flex md:flex-col z-50 bg-transparent md:h-screen h-24 left-0 w-full md:w-28 overflow-hidden box-border">
  <div className="flex md:flex-col flex-row justify-center items-center w-full md:justify-between md:items-center md:h-full h-auto">
    <ul className="flex flex-row md:flex-col gap-4 md:gap-32 justify-center items-center md:mt-32 mt-4 w-full">
      <li className="linkAnimation cursor-pointer md:-rotate-90 dark:text-white text-black relative">
        <LinkScroll
          onClick={() => setIsOpen(false)}
          to="About Me"
          smooth
          spy
          offset={-85}
          activeClass="nav-active"
          className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 transform md:rotate-90 origin-center"
        >
          About Me
        </LinkScroll>
      </li>
      <li className="linkAnimation cursor-pointer md:-rotate-90 dark:text-white text-black relative">
        <LinkScroll
          onClick={() => setIsOpen(false)}
          to="Skills"
          smooth
          spy
          offset={-90}
          activeClass="nav-active"
          className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 transform md:rotate-90 origin-center"
        >
          Skills
        </LinkScroll>
      </li>
      <li className="linkAnimation cursor-pointer md:-rotate-90 dark:text-white text-black relative">
        <LinkScroll
          onClick={() => setIsOpen(false)}
          to="Projects"
          smooth
          spy
          offset={20}
          activeClass="nav-active"
          className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 transform md:rotate-90 origin-center"
        >
          Projects
        </LinkScroll>
      </li>
      <li className="linkAnimation cursor-pointer md:-rotate-90 dark:text-white text-black relative">
        <LinkScroll
          onClick={() => setIsOpen(false)}
          to="Contact"
          smooth
          spy
          offset={0}
          activeClass="nav-active"
          className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 transform md:rotate-90 origin-center"
        >
          Contact
        </LinkScroll>
      </li>
    </ul>
  </div>
</header>

  );
};

export default Header;
