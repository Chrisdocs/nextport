import React from "react";
import Link from "next/link"
import styles from "../styles/Home.module.scss";
import Card from "./Card";

export default function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <p className={styles.projectstitle}>Projects</p>
			<p className={styles.projectsp}>If you want to see more, take a stroll through my GitHub <a href="https://github.com/Chrisdocs" target="_blank" rel="noreferrer" className={styles.btn}>{`→`}</a>
				</p>
			<Card />
    </div>
  );
}
