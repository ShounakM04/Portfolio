import React from "react";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <motion.div
      className={styles.container}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
      }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link} target="_blank">
            Demo
          </a>
        )}
        <a href={source} className={styles.link} target="_blank">
          Source
        </a>
      </div>
    </motion.div>
  );
};
