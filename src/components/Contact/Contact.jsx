import React from 'react';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h1>CONTACT</h1>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.contactInfo}>
            <li className={styles.info}>
            Email Link:<a href="https://mailto:jmpatel2113@gmail.com">jmpatel2113@gmail.com</a>
            </li>
            <li className={styles.info}>
            LinkedIn Link:<a href="https://www.linkedin.com/in/jineshpatel02">LinkedIn.com/Jinesh Patel</a>
            </li>
            <li className={styles.info}>
            Github Link:<a href="https://github.com/jmpatel2113">Github.com/Jinesh Patel</a>
            </li>
        </ul>
    </footer>
  );
}

export default Contact
