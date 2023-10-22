import React, { useState } from 'react'
<<<<<<< Updated upstream
import styles from "../../components/Navbar/Navbar.module.css"
=======
import styles from './Navbar.module.css'
>>>>>>> Stashed changes
import { getImageUrl } from "../../utils"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
<<<<<<< Updated upstream
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/bar.png") : getImageUrl('nav/closeIcon.png')} alt='menu-button' onClick={() => setMenuOpen(!menuOpen)} />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li ><a href='#about'>About</a></li>
                    <li ><a href='#experience'>Experience</a></li>
                    <li ><a href='#projects'>Projects</a></li>
                    <li ><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
=======
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
                    <a href='#contact'>Contact</a>
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
            </div>
        </nav >
>>>>>>> Stashed changes
    )
}



export default Navbar