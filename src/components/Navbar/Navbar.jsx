import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
       
      </a>
      <div className={styles.menuContainer}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        >
          <li>
            <a href="#" onClick={() => handleScroll("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleScroll("experience")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleScroll("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleScroll("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};