import React from 'react'
import styles from "./Projects.module.css"


const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title_projects}>Projects</h2>
      <div className={styles.projects}>
        <li>
          <a href='https://dazzling-snickerdoodle-9bc311.netlify.app/'>Weather App</a>
        </li>
      </div>
    </section>
  )
}

export default Projects