import React from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Sending...')

		let data = {
			name,
			email,
			message
		}

		fetch('api/contact', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-type': 'application/json' 
			},
			body: JSON.stringify(data)
		}).then((res) => {
			console.log('Response received')

			if (res.status === 200) {
				console.log('Success!')
				setSubmitted(true)
				setName('')
				setEmail('')
				setMessage('')
			}
		})
	}

  return (
		<div>
			<p className={styles.contactTitle}>Reach out</p>

			<div id="contact" className={styles.formContainer}>
				<form id={styles.form}>
					<label htmlFor="name">
						<input 
						type="text" 
						name="name" 
						className={styles.formInput} 
						placeholder="Name" 
						onChange={(e) => {
							setName(e.target.value)
						}}
						/>
					</label>
					<br />

					<label htmlFor="email">
						<input
							className={styles.formInput}
							type="email"
							name="email"
							placeholder="Email"
							onChange={(e) => {
								setEmail(e.target.value)
							}}
						/>
					</label>
					<br />

					<textarea
						className={styles.formMessage}
						name="message"
						placeholder="Message"
						maxLength="500"
						type="text"
						onChange={(e) => {
							setMessage(e.target.value)
						}}
					/>
					<br />

					<div className={styles.submitDiv}>
						<button 
						className={styles.submitBtn} 
						type="submit"
						onClick={(e) => {
							handleSubmit(e)
						}}
						>
							Send →
						</button>
					</div>
				</form>
			</div>
		</div>
  );
}
