import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        
        <motion.li
          initial={{ scale: 0.75 }}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className={styles.link}
        >
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/shounakmulay26/" target="_blank">
            linkedin.com/shounakmulay26/ 
          </a>
        </motion.li>
        <motion.li
          initial={{ scale: 0.75 }}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className={styles.link}
        >
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/shounakm04" target="_blank">
            github.com/shounakm04
          </a>
        </motion.li>
        <motion.li
          initial={{ scale: 0.75 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          className={styles.link}
          style={{ flexBasis: "100%" }} /* Force Mail onto the second line */
        >
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:shounakmulay04@email.com" target="_blank">Mail</a>
        </motion.li>
      </ul>
    </footer>
  );
};
