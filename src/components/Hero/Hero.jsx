import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 4000); // Match this with the duration of the typing animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.titleContainer} ${isTypingComplete ? styles.hiddenTitle : ""}`}>
          Hi, I'm Shounak
        </div>
        <p className={styles.description}>
          I am an IT undergraduate with a keen interest in full stack web development and create dynamic and scalable web applications
        </p>
        <a href="https://drive.google.com/drive/folders/1G4p8Xsp9sp5GNM-dDJeZ9lkmfsV6vU5l?usp=drive_link" target="_blank" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
