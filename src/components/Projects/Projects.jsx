import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <div className={styles.projectsRow}>
          {projects.slice(0, 2).map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
        <div className={styles.projectsRow}>
          {projects.slice(2, 4).map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};