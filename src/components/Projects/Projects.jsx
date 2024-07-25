import React from 'react';
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import ProjectParts from './ProjectParts';

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
        <h1 className={styles.title}>PROJECTS</h1>
        <div className={styles.projects}>
            {
                projects.map((project, id) => {
                    return (
                        <ProjectParts key={id} project={project}/>
                    );
                })
            }
        </div>
    </section>
  );
}

export default Projects
