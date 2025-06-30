import React from 'react'
import { getImageUrl } from "../../utils"
import styles from "../Hero/Hero.module.css"

const Hero = () => {
    return (<section className={styles.container_hero}>
        <div className={styles.content_hero}>
            <h1 className={styles.title_hero}>Hi, my name is Penyo Banchev </h1>
            <p className={styles.description_hero}>I’m passionate about driving growth, meeting new people, and building strong client relationships that lead to real results.</p>
            <a href="/penyo_banchev_resume.pdf" className={styles.downloadCV}>Download My CV</a>
        </div>
        <img src={getImageUrl("hero/personal_photo.png")} alt='Hero image of me' className={styles.img_hero} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section >
    );
}

export default Hero