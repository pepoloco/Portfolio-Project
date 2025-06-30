// import React from 'react'
// import styles from "./Certification.module.css"
// import certificate from "../../data/certification.json";
// import { credentialUrl } from '../../utils';

// const skillsGained = (skills) => {
//     return (
//         <ul className={styles.skillsList}>
//             {skills.map((skill, index) => (
//                 <li key={index} className={styles.skillItem}>
//                     {skill}
//                 </li>
//             ))}
//         </ul>
//     )
// }

// function Ceritification() {
//     return (
//         <section className={styles.certificateContainer} id='certification'>
//             {/* <div className={styles.topBlur} />
//             <div className={styles.bottomBlur} /> */}
//             <div className={styles.certificateContent}>
//                 <h2 className={styles.certificateTitle}>Certificates</h2>
//                 <ul className={styles.certificateNames}>
//                     {certificate.map((certificate, id) => {
//                         return (
//                             <li key={id}>
//                                 <div className={styles.certificate}>
//                                     <h3>{certificate.title}</h3>
//                                     <p>Skills Gained</p>
//                                     <div className={styles.certificationSkills}>
//                                         {skillsGained(certificate['gained-skills'])}
//                                     </div>
//                                     <p className={styles.publisher}>By:{certificate.publisher}</p>
//                                     <a href={credentialUrl(certificate['credential-id'])} target="_blank" rel="noopener noreferrer">View Certificate</a>
//                                 </div>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         </section>
//     )
// }

// export default Ceritification
