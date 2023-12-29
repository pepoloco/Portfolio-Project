import React from 'react'
import styles from "./Projects.module.css"
import { getImageUrl } from '../../utils'


const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      url: 'https://accurate-weather-appjsx.netlify.app/',
      image: 'weather-app.png',
      duration: '5 days',
      description: 'Weather app, in real live'
    },
    {
      title: "My Portfolio",
      url: "https://peposportfolio.netlify.app",
      image: "portfolio.png",
      duration: 'Constantly updating it',
      description: "My online portfolio"
    },
    {
      title: "Steam App",
      url: "https://steam-app-market.netlify.app/",
      image: "steam-app.png",
      duration: '12 days',
      description: "Gaming library to choose the most treding games"
    },
    {
      title: "Night Club",
      url: "",
      image: "",
      duration: 'Currently working on it',
      description: "A music player, implementing API from spotify"
    }
  ];
  return (
    <section className={styles.container}>
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={project.title} className={styles.project}>
            <a href={project.url}>
              <img src={getImageUrl(`projects/${project.image}`)} alt={project.title} style={{ width: "188px", height: "180px" }} />
            </a>
            <div className={styles.paragraphs}>
              <p>Title: {project.title}</p>
              <p>Description: {project.description}</p>
              <p>Duration: {project.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='topBlur'></div>
      <div className='bottomBlur'></div>
    </section>
  )
}

export default Projects