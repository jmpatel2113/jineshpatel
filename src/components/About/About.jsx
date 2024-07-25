import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h1 className={styles.title}>ABOUT</h1>
        <div className={styles.content}>
            <ul className={styles.items}>
                <li className={styles.eachItem}>
                    <div className={styles.descriptions}>
                        <h3>Front-end Developer</h3>
                        <p>I'm a front-end developer with experience in building 
                            responsive and robust websites and applications while using APIs.
                        </p>
                    </div>
                </li>
                <li className={styles.eachItem}>
                    <div className={styles.descriptions}>
                        <h3>Student at Rutgers University</h3>
                        <p>I'm a college student attending Rutgers University in New Brunswick, NJ.
                            I'm majoring in Computer Science with B.S. degree who is expected to
                            graduate in December 2025.
                        </p>
                    </div>
                </li>
                <li className={styles.eachItem}>
                    <div className={styles.descriptions}>
                        <h3>Family and Friends Person</h3>
                        <p>I love spending time with my family and hanging out with my Friends
                            as well as connect with new people. 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}

export default About
