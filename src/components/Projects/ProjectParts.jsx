import React from 'react';
import styles from "./ProjectParts.module.css";
import { getImageUrl } from '../../utils';

const ProjectParts = ({project : {title, imageSrc, description, skills, source}}) => {
  return (
    <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill, id) => {
                return(
                    <li key={id} className={styles.skill}>{skill}</li>
                );
            })}
        </ul>
        <div>
            <a href={source} className={styles.source}>Source</a>
        </div>
    </div>
  );
}

export default ProjectParts
