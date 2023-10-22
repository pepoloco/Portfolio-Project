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
                    {
                        history.map((historyItem, id) => {
                            return (
                                <li key={id} className={styles.historyItem}>
                                    <img
                                        src={getImageUrl(historyItem.imageSrc)}
                                        alt={`${historyItem.organisation} Logo`}
                                    />
                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.role}, ${historyItem.organisation}`}</p>
                                        <ul>{historyItem.experiences.map((experience, subId) => {
                                            return <li key={subId}>{experience}</li>
                                        })}</ul>
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