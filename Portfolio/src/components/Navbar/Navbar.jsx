import React, { useState } from 'react'
import styles from './Navbar.module.css'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar_navBar}>
            <a className={styles.title_navBar} href='/'>Portfolio</a>
            <ul className={`${styles.menuItems} ${menuOpen ? styles.active : ''}`}>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#certification'>Certifications</a>
                </li>
                <li>
                    <a href='#contact'>Contacts</a>
                </li>
            </ul>
            <div
                className={styles.menu_navBar}
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Menu"
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </nav >
    )
}



export default Navbar