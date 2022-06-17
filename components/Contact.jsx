import React from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending...");

    let data = {
      name,
      email,
      subject,
      message,
    };

    fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");

      if (res.status === 200) {
        console.log("Success!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
				setSubject("");
      } else {
				console.log("Your message failed to send.")
			}
    });
  };

  const regex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const messageCharactersWatch = 500 - message.length;

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
                setName(e.target.value);
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
                setEmail(e.target.value);
              }}
            />
          </label>
          <br />

          <label htmlFor="subject">
            <input
              className={styles.formInput}
              type="text"
              name="subject"
              placeholder="subject"
              onChange={(e) => {
                setSubject(e.target.value);
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
              setMessage(e.target.value);
            }}
          />
          <br />
          <p className={styles.charCount}>{messageCharactersWatch}/500</p>

          <div className={styles.submitDiv}>
            <button
              className={styles.submitBtn}
              type="submit"
              onClick={(e) => {
                email.match(regex)
                  ? handleSubmit(e)
                  : console.log("email not valid");
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
