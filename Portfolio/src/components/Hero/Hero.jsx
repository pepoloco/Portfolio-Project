import React from 'react'
import { getImageUrl } from "../../utils"
import styles from "../Hero/Hero.module.css"

const Hero = () => {
    return (<section className={styles.container_hero}>
        <div className={styles.content_hero}>
            <h1 className={styles.title_hero}>Hi ...text</h1>
            <p className={styles.description_hero}>Text........</p>
            <a href="mailto:banchevpepo@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/cartoon-1.png")} alt='Hero image of me' className={styles.img_hero} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section >
    );
}

export default Hero