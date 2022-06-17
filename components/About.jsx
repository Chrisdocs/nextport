import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import profilepic from "../public/me.png";
import styles from "../styles/Home.module.scss";

export default function About () {
	
	return (
		<div className={styles.about} id="about">
		<div className={styles.aboutImg}>
			<Image
				src={profilepic}
				alt="photo of Chris"
				width={240}
				height={240}
			/>
		</div>
		<p className={styles.aboutTitle}>Yours truly.</p>

		<div className={styles.aboutP}>
			<p>
				Highly adaptable and creative individual with strong business
				acumen able to solve common and complex organizational issues
				driving growth and transformation. Trained in full-stack
				development, building modern ground up web applications. Seeking
				innovative teams developing cutting edge applications using new
				and established technologies. Here are some things I've worked
				on.{" "}
				<Link href="#projects">
					<a className={styles.btn}>{`↴`}</a>
				</Link>
			</p>
		</div>

		<p className={styles.aboutSub}>In my Personal life...</p>
		<p className={styles.aboutP}>
			The outdoors call me, and I try to spend as much time there as I
			can. Whether it's a walk through our local park or a multi-day
			backpacking trip, I'm game. Then there is the more obvious passion
			- technology. I love seeing how technology can change the world,
			and hopefully in ways which benefit the people who use them.
		</p>
	</div>
	)
}