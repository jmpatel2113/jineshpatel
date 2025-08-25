import React from 'react';
import { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            Portfolio</a>
        <div className={styles.menu}>
            <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
        </div>
    </nav>
  );
};

export default Navbar
