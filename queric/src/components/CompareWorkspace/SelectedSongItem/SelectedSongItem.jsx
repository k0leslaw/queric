import albumCover from "../../../assets/test-rps.jpg"

import "./SelectedSongItem.css";

function SelectedSongItem ({ id, title, artist, date, removeRelease }) {
    return (
        <div className="ssi-container">
            <img src={albumCover} className="album-cover"/>
            <div className="ssi-info">
                <h3 className="header-font">{title}</h3>
                <h3 className="subtitle">{artist} • {date.substring(0, 4)}</h3>
                <div className="ssi-remove-song">
                    <h3 className="subtitle">1 Song</h3>
                    <button className="primary-button" onClick={() => removeRelease(id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default SelectedSongItem;