import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "../Contact/Contact.module.css"

const Contact = () => {
    return (
        <footer className={styles.footerContainer} id='contact'>
            <div className={styles.text}>
                <h2>Contacts</h2>
            </div>
            <div className={styles.contactContainer}>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/email.png")} alt='Email Icon'></img>
                        <a href='mailto:banchevpepo@gmail.com'>banchevpepo@gmail.com</a>
                    </li>
                    <li>
                        <img src={getImageUrl("contact/linkedin.png")} alt='LinkedIn Icon'></img>
                        <a href='https://www.linkedin.com/in/pepo-banchev/'>Pepo Bancev</a>
                    </li>
                    <li>
                        <img src={getImageUrl("contact/github.png")} alt='Github Icon'></img>
                        <a href='https://github.com/pepoloco'>pepoloco</a>
                    </li>
                    <li>
                        <img src={getImageUrl("contact/phone.png")} alt='Phone'></img>
                        <p>(+359) 89 7717 019</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Contact