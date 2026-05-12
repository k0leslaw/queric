import { Link } from "react-router-dom";
import { BsMusicNoteList } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";

import "./NavigationBar.css";

function NavigationBar () {
    return (
        <div className="nav-bar header-font">
            <div className="nav-left-container">
                <h1 className="nav-logo"><BsMusicNoteList />Queric</h1>
                <div className="nav-link-container">
                    <Link to="/">Home</Link>
                    <Link to="/compare-workspace">Compare Workspace</Link>
                    <Link to="/upload">Upload & Analyze</Link>
                    <Link to="/">Account & Settings</Link>
                </div>
            </div>
            <div className="nav-right-container">
                <Link to="/">Help</Link>
                <Link to="/login">
                    <button className="secondary-button sign-in-button"><RiAccountCircleFill className="account-icon"/>Sign in</button>
                </Link>
            </div>
        </div>
    )
}

export default NavigationBar;