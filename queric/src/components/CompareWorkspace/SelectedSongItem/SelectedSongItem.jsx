import { useEffect } from "react";
import "./SelectedSongItem.css";

function SelectedSongItem ({ id, title, artist, date, trackCount, coverUrl, removeRelease }) {
    const fallbackCoverArt = (e) => {
        e.target.src = "https://placehold.co/250x250?text=No+Cover+Art";
    };
    
    return (
        <div className="ssi-container">
            <img 
                src={coverUrl || "https://placehold.co/250x250?text=No+Cover+Art"} 
                alt={`${title} cover art`}
                onError={fallbackCoverArt}
                className="album-cover"
            />
            <div className="ssi-info">
                <h3 className="header-font">{title}</h3>
                <h3 className="subtitle">{artist} • {date ? date.substring(0, 4) : "Unknown"}</h3>
                <div className="ssi-remove-song">
                    {trackCount > 1 && <h3 className="subtitle">Part of {trackCount} song album</h3>}
                    <button className="primary-button" onClick={() => removeRelease(id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default SelectedSongItem;