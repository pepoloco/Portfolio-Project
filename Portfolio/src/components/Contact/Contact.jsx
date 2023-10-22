import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "../Contact/Contact.module.css"

const Contact = () => {
    return (
        <footer className={styles.footerContainer} id='contact'>
            <div className={styles.text}>
                <h2 className>Contacts</h2>
                <p className>To Contact Me</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/email.png")} alt='Email Icon'></img>
                    <a href='mailto:banchevpepo@gmail.com'>banchevpepo@gmail.com</a>
                </li>
                <li>
                    <img src={getImageUrl("contact/linkedin.png")} alt='LinkedIn Icon'></img>
                    <a href='https://www.linkedin.com/in/pepo-banchev-6b5908165/'>Pepo Bancev</a>
                </li>
                <li>
                    <img src={getImageUrl("contact/github.png")} alt='Github Icon'></img>
                    <a href='https://github.com/pepoloco'>pepoloco</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact