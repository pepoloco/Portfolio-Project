import React, { useState } from 'react'
import styles from "./Projects.module.css"
import { getImageUrl } from '../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const [current, setCurrent] = useState(0);
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
      url: "'https://peposportfolio.netlify.app/",
      image: "portfolio.png",
      duration: 'Consistently updating it',
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
      duration: '',
      description: "A music player, implementing API from spotify"
    }
  ];
  const nextProject = () => {
    setCurrent((current + 1) % projects.length);
  }
  const previousProject = () => {
    setCurrent((current - 1 + projects.length) % projects.length)
  }
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title_projects}>Projects</h2>
      <div className={styles.carousel}>
        <button onClick={previousProject} className={styles.arrow}><FontAwesomeIcon icon={faArrowLeftLong} /></button>
        <div className={styles.projectsWrapper}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${styles.project} ${index === current ? styles.active : ''}`}
            >
              {project.image ? (
                <a href={project.url || '#!'}>
                  <img
                    src={getImageUrl(`projects/${project.image}`)}
                    alt={project.title}
                    style={{ width: "240px", height: "200px" }}
                  />
                </a>
              ) : (
                <div className={styles.placeholder}>
                  <p style={{ opacity: '1', fontSize: '30px' }}>Working on</p>
                </div>
              )}
              <div className={styles.paragraphs}>
                <p>Title: {project.title}</p>
                <p>Description: {project.description}</p>
                <p>Duration: {project.duration}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextProject} className={styles.arrow}><FontAwesomeIcon icon={faArrowRightLong} /></button>
      </div>
      <h3></h3>
    </section>
  )
}

export default Projects