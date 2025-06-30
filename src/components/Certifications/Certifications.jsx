import styles from "./Certifications.module.css";
import certifications from "../../data/certifications.json";

const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <h1 className={styles.title}>CERTIFICATIONS</h1>
      <ul className={styles.certificationList}>
        {certifications.map((cert, id) => (
          <li key={id} className={styles.certItem}>
            <div className={styles.certDetails}>
              
              <div className={styles.certHeader}>
                <h3>{cert.title}</h3>
                <span className={styles.date}>{cert.date}</span>
              </div>
              
              <p>{cert.issuer}</p>
              
              <ul>
                {cert.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
