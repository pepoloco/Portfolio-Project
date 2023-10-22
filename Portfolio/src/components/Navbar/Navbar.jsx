import React, { useState } from 'react'
import styles from "../Navbar/Navbar.module.css"
import { getImageUrl } from "../../utils"


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar_navBar}>
            <a className={styles.title_navBar} href='/'>Portfolio</a>
            <div className={styles.menu_navBar}>
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
    )
}

export default Navbar