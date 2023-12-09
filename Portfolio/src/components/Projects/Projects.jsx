import React from 'react'
import styles from "./Projects.module.css"
import { getImageUrl } from '../../utils'


const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title_projects}>Projects</h2>
      <div className={styles.projects}>
        <li>
          <h3>Weather App</h3>
          <a href='https://accurate-weather-appjsx.netlify.app/'><img src={getImageUrl("projects/weather-app.png")} alt='My Project' style={{ width: "160px", height: "200px" }} /></a>
        </li>
        <li>
          <h3>My Portfolio</h3>
          <a href='https://peposportfolio.netlify.app/'><img src={getImageUrl("projects/portfolio.png")} alt='My Portfolio' style={{ width: "340px", height: "200px" }} /></a>
        </li>
        <p>Rght now contributing to Open Source Projects on GitHub</p>
      </div>
    </section>
  )
}

export default Projects