import React, { useState } from 'react'
<<<<<<< HEAD
<<<<<<< Updated upstream
import styles from "../../components/Navbar/Navbar.module.css"
=======
import styles from './Navbar.module.css'
>>>>>>> Stashed changes
=======
import styles from "../Navbar/Navbar.module.css"
>>>>>>> Experience
import { getImageUrl } from "../../utils"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
<<<<<<< HEAD
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
=======
        <nav className={styles.navBar_navBar}>
            <li>
                <a className={styles.title_navBar} href="/">Portfolio</a>
            </li>
            <li>
                <a className="nav-link" href="#about">About</a>
            </li>
            <li>
                <a clasNames="nav-link" href="#experience">Experience</a>
            </li>
            <li>
                <a class="nav-link disabled" href='#contact'>Contact</a>
            </li>
        </nav>
        // <nav className={styles.navbar_navBar}>
        //     <a className={styles.title_navBar} href='/'>Portfolio</a>
        //     <div className={styles.menu_navBar}>
        //         <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/bar.png") : getImageUrl('nav/closeIcon.png')} alt='menu-button' onClick={() => setMenuOpen(!menuOpen)} />
        //         <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        //             onClick={() => setMenuOpen(false)}>
        //             <li ><a href='#about'>About</a></li>
        //             <li ><a href='#experience'>Experience</a></li>
        //             {/* <li ><a href='#projects'>Projects</a></li> */}
        //             <li ><a href='#contact'>Contact</a></li>
        //         </ul>
        //     </div>
        // </nav>
>>>>>>> Experience
    )
}



export default Navbar