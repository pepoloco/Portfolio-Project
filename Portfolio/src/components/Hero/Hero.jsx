import React from 'react'
import { getImageUrl } from "../../utils"
import styles from "../Hero/Hero.module.css"

const Hero = () => {
    return (<section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi ...text</h1>
            <p className={styles.description}>Text........</p>
            <a href="mailto:banchevpepo@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/cartoon-1.png")} alt='Hero image of me' className={styles.img} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section >
    );
}

export default Hero