import { useState } from "react";
import "./cv.css" 

const DownloadLink = () => {
    const [hover, setHover] = useState(false);

    return (
        <a href="/resume_penyobanchev.pdf"
            download
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="download-link"
        >
            <span>Download My Resume</span>
            <span className={`arrow ${hover ? 'filled' : ''}`}>→</span>
        </a>
    )
}
export default DownloadLink