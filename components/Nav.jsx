import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Nav() {

const top = () => {
	window.scrollTo(
		{
			top: 0,
			behavior: 'smooth'
		}
	)
}

  return (
    <nav id="nav" className={styles.nav}>
      <div className={styles.navLeft}>
          <a id="topBtn" onClick={top}>Top ↑</a>
      </div>
      <div className={styles.navRight}>
        <Link href="#about">
          <a>About</a>
        </Link>
        <Link href="#projects">
          <a>Projects</a>
        </Link>
        <Link href="#contact">
          <a>Contact</a>
        </Link>
        <a download href="resume.pdf" className={styles.resumeBtn}>Resume ↓</a>
      </div>
    </nav>
  );
}
