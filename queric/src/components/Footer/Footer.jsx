import { Link } from "react-router-dom";
import { BsMusicNoteList } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

import "./Footer.css";

function Footer () {
    return (
        <div className="footer">
            <div className="footer-top-container">
                <div className="footer-left-container">
                    <div className="footer-logo">
                        <BsMusicNoteList className="footer-logo-icon" />
                        <h2>Queric</h2>
                    </div>
                    <h3 className="subtitle">Insightful lyric analytics for researchers, artists, and writers. Explore docs, try the API, or contact support.</h3>
                </div>
                <div className="footer-link-container">
                    <Link to="/">User Documentation</Link>
                    <Link to="/">API Resources</Link>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Terms of Service</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Support</Link>
                </div>                
            </div>
            <div className="footer-bottom-container">
                <h3 className="c">© 2026 Queric — All rights reserved.</h3>
                <div className="footer-social-links">
                    <Link to="/"><IoLogoYoutube className="social-icon"/>YouTube</Link>
                    <Link to="/"><IoLogoGithub className="social-icon" />GitHub</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;