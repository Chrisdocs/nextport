import React from "react";
import me from "../public/me.png";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import smapi from "../public/smapi.png";
import bike from "../public/bike.png";
import md from "../public/md.png";
import dnd from "../public/dnd.png";

export default function Card() {
  let projects = [
    {
      name: "Social API",
      about: "An API for managing the backend in a social application",
      tech: "Express Luxon MongoDB Mongoose Node",
      github: "https://github.com/Chrisdocs/SocNetAPI",
      web: "https://github.com/Chrisdocs/SocNetAPI",
      img: smapi,
      alt: "graphic reading API",
			key: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    },
    {
      name: "BikeSleuth",
      about: "A web app for keeping track of your bikes",
      tech: "Express Apollo GraphQL JWT Bcrypt Mongoose React Node",
      github: "https://github.com/Chrisdocs/FindMyBike",
      web: "https://bikesleuth.herokuapp.com/#/",
      img: bike,
      alt: "Graphic with bike",
			key: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    },
    {
      name: "Readme Generator",
      about: "Terminal Based Program for generating Readme.md's",
      tech: "FS Inquirer Markdown-toc",
      github: "https://github.com/Chrisdocs/Readme-Gen",
      web: "https://github.com/Chrisdocs/Readme-Gen",
      img: md,
      alt: "graphic reading .md",
			key: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000 
    },
    {
      name: "D&D Map App",
      about: "Little web app so my friends can navigate my D&D world map",
      tech: "React Leaflet",
      github: "https://chrisdocs.github.io/darksky/",
      web: "https://chrisdocs.github.io/darksky/",
      img: dnd,
      alt: "graphic with dragon",
			key: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000 
    },
  ];

  return (
    <div className={styles.cardcont}>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <div className={styles.card}>
              <Image
                src={project.img}
                alt={project.alt}
                width={240}
                height={240}
              ></Image>
              <div>
                <h3>
                  <a target="_blank" href={project.github}>
                    {project.name}
                  </a>
                </h3>
                <p>{project.about}</p>
                <p>{project.tech}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
