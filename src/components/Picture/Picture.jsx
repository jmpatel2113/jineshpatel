import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Picture.module.css"

const Picture = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi. I'm Jinesh</h1>
        <p className={styles.description}>I'm a senior at <strong>Rutgers University</strong> majoring in <strong>Computer Science</strong> with a minor in Business Administration. 
          
          <p className={styles.description1}>I'm passionate about learning and building <strong>software applications</strong> that address real-world challenges. 
             With a strong background in <strong>software development</strong> and hands-on project experience, I enjoy creating impactful, user-focused solutions. 
          </p>
          <p className={styles.description1}>I'm also an <strong>aspiring cloud application developer</strong> with growing expertise in <strong>AWS</strong> tools and technologies. 
             Feel free to reach out if you'd like to connect or learn more!
          </p>
        </p>
        <a href="https://mailto:jmpatel2113@gmail.com" className={styles.contactButton}>Contact Me</a>
        <img src={getImageUrl("ProfilePicture/ProfilePicture.jpg")} alt="Profile Picture" className={styles.Picture}/>
    </div>
  </section>
  );
}

export default Picture

