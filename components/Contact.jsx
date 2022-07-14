import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.scss";

export default function Contact() {
	const router = useRouter();

  return (
    <div id='contact' className={styles.contactContainer}>
      <p className={styles.contactTitle}>Reach out</p>
			<p className={styles.contactText}>Need help with a project? have a cool opportunity? Or maybe you just want to say hey!  Please shoot me an email and I will get back to you as soon as I can.</p>
			<button className={styles.contactBtn} type="button" onClick={() => router.push('mailto:chriswolfe.dev@gmail.com')}>
      Email me
    </button>
    </div>
  );
}
