import React from 'react'
import styles from "./Experience.module.css"
import skills from "../../data/skills.json"
import { getImageUrl } from '../../utils'
import history from "../../data/history.json"

const Experience = () => {
    return (
        <section id='experience'>
            <h2>Experience</h2>
            <div>
                <div>
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
                <ul>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <li key={id}>
                                    <img
                                        src={getImageUrl(historyItem.imageSrc)}
                                        alt={`${historyItem.organisation} Logo`}
                                    />
                                    <div>
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