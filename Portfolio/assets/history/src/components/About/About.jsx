import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

const About = () => {
    return (
        <section className={styles.containers} id='about'>
            <h2 className={styles.title_h2}>About</h2>
            <div className={styles.content_about}>
                <img src={getImageUrl("hero/computerMemo.png")}
                    alt='studying'
                    className={styles.imageStudying} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("icons/icons8-front-end-64.png")} alt='Cursor' className={styles.imageCursor} />
                        <div className={styles.aboutItemText}>
                            <h3>Front End Dev</h3>
                            <p>I have experience with HTML,CSS,JAVASCRIPT,BOOTSTRAP and REACT , currently trying to improve my skills even more. </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("icons/icons8-computer-94.png")} alt='Server Icon' className={styles.imageServer} />
                        <div className={styles.aboutItemText}>
                            <h3>Back End Dev</h3>
                            <p>I have little experience with Node.js</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("icons/icons8-ui-design-64.png")}
                            alt='UI Icon'
                            className={styles.imageCursor} />
                        <div className={styles.aboutItemText}>
                            <h3>UI DESIGN</h3>
                            <p>Trying to designe more interractive and cool looking applications.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About