import albumCover from "../../../assets/test-rps.jpg"

import "./SelectedSongItem.css";

function SelectedSongItem () {
    return (
        <div className="ssi-container">
            <img src={albumCover} className="album-cover"/>
            <div className="ssi-info">
                <h3 className="header-font">Stockholm</h3>
                <h3 className="subtitle">Jason Isbell • 2012</h3>
                <div className="ssi-remove-song">
                    <h3 className="subtitle">1 Song</h3>
                    <button className="primary-button">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default SelectedSongItem;