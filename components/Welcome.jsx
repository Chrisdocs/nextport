import React from 'react';
import Link from 'next/link';
import styles from "../styles/Home.module.scss";

export default function Welcome () {
	
	return (
		<div id="welcome" className={styles.welcome}>
		<h4>Hello, I{`'`}m</h4>

		<h1 className={styles.title}>Christopher Wolfe;</h1>

		<p className={styles.description}>
			What I do is about You. But if you want to know, here is a bit{" "}
			<Link href="#about">
				<a className={styles.btn}>{`about me ↴`}</a>
			</Link>
		</p>
	</div>
	)
}