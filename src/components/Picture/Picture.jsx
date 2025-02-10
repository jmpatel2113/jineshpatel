import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Picture.module.css"

const Picture = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi. I'm Jinesh</h1>
        <p className={styles.description}>I'm a junior at Rutgers University majoring in
            Computer Science. I am interested in learning and building software applications that tackle real-world
            problems. Particulaly, I am impactful in web development because I have prior experience and projects. Reach out if you'd 
            like to learn more!
        </p>
        <a href="https://mailto:jmpatel2113@gmail.com" className={styles.contactButton}>Contact Me</a>
        <img src={getImageUrl("ProfilePicture/ProfilePicture.jpg")} alt="Profile Picture" className={styles.Picture}/>
    </div>
  </section>
  );
}

export default Picture

