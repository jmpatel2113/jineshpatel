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
                        <h3>Web Developer</h3>
                        <p>I'm a web developer with experience in building responsive and robust websites
                            and applications while integrating APIs and backend database.
                        </p>
                    </div>
                </li>
                <li className={styles.eachItem}>
                    <div className={styles.descriptions}>
                        <h3>Aspiring Cloud Solutions Arhitect</h3>
                        <p>I'm an aspiring cloud solutions architect with a passion for designing
                            and implementing scalable and secure cloud-based solutions using AWS tools and services.
                            I'm currently learning AWS through AWS Cloud Institute program developed and 
                            led by AWS insturctors and engineers.
                        </p>
                    </div>
                </li>
                <li className={styles.eachItem}>
                    <div className={styles.descriptions}>
                        <h3>Senior at Rutgers University</h3>
                        <p>I'm a senior attending Rutgers University in New Brunswick, NJ.
                            I'm majoring in Computer Science with B.S. degree and am expected to
                            graduate in December 2025. I also have minor in Business Administration.
                        </p>
                    </div>
                </li>
                <li className={styles.eachItem}>
                    <div className={styles.descriptions}>
                        <h3>Family and Friends Person</h3>
                        <p>I love spending time with my family and hanging out with my Friends
                            and connect with new people through clubs and sports. 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}

export default About
