import React from 'react'
import { getImageUrl } from "../../utils"
import styles from "../Hero/Hero.module.css"

const Hero = () => {
    return (<section className={styles.container_hero}>
        <div className={styles.content_hero}>
            <h1 className={styles.title_hero}>Hello, my name is Penyo Banchev </h1>
            <p className={styles.description_hero}>I have solid understanding of JavaScript, HTML, CSS, currently studying React library,
                trying to do projects with Vite framework and Next.js with Tailwind, also on my free time, I am trying to contribute on Open-Source projects.</p>
            {/* <a href="mailto:banchevpepo@gmail.com" className={styles.contactBtn}>Contact Me</a> */}
        </div>
        <img src={getImageUrl("hero/wave.png")} alt='Hero image of me' className={styles.img_hero} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section >
    );
}

export default Hero