import React from 'react'
import styles from "./Certification.module.css"
import certificate from "../../data/certification.json";
import { credentialUrl } from '../../utils';

function Ceritification() {
    return (
        <section className={styles.certificateContainer}>
            <div className={styles.certificateContent}>
                <h2 className={styles.certificateTitle}>Certificates</h2>
                <ul className={styles.certificateNames}>
                    {certificate.map((certificate, id) => {
                        return (
                            <li key={id}>
                                <div className={styles.certificate}>
                                    <h3>{certificate.title}</h3>
                                    <p>By:{certificate.publisher}</p>
                                    <a href={credentialUrl(certificate['credential-id'])} target="_blank" rel="noopener noreferrer">View Certificate</a>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Ceritification