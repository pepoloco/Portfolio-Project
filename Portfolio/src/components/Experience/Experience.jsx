import React from 'react'
import styles from "./Experience.module.css"
import skills from "../../data/skills.json"
import { getImageUrl } from '../../utils'
import history from "../../data/history.json"

const Experience = () => {
    return (
        <section className={styles.container_exp} id='experience'>
            <h2 className={styles.title_exp}>Experience</h2>
            <div className={styles.content_exp}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)}
                                        alt={skill.title} />
                                </div>
                                <p>
                                    {skill.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <ul className={styles.history}>
                    <h3 className={styles.previousJobs}>Previous Jobs</h3>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <li key={id} className={styles.historyItem}>
                                    <img
                                        src={getImageUrl(historyItem.imageSrc)}
                                        alt={`${historyItem.organisation} Logo`}
                                    />
                                    <div className={styles.historyItemDetails}>
  <div className={styles.headerRow}>
    <h3 className={styles.companyName}>{historyItem.organisation}</h3>
    <span className={styles.dates}>{`${historyItem.startDate} – ${historyItem.endDate}`}</span>
  </div>
 <small className={styles.locationType}>
  {historyItem.locationType}
</small>
  <h5 className={styles.role}>{historyItem.role}</h5>
  <ul>
    {historyItem.experiences.map((experience, subId) => {
      if (
        historyItem.role === "Sales Business Development" &&
        subId === 0 &&
        experience.startsWith("At Torg")
      ) {
        return <p key={subId} className={styles.introParagraph}>{experience}</p>;
      }
      return <li key={subId}>{experience}</li>;
    })}
  </ul>
</div>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
export default Experience