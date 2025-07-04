import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from '../../utils';

const Experience = () => {
    
    //https://icons8.com/icons/set/nextjs - link for icons
  
    return (
    <section className={styles.container} id="experience">
        <h1 className={styles.title}>EXPERIENCE</h1>
        <div className={styles.content}>
            <ul className={styles.history}>
                {
                    history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <div className={styles.historyItemDescriptions}>
                                    <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>{historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}</ul>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImage}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                    );
                })
            }</div>
        </div>
    </section>
  );
}

export default Experience
