import "./SelectedSongItem.css";

function SelectedSongItem ({ id, title, artist, date, trackCount, coverId, removeRelease }) {
    const coverUrl = coverId
        ? `https://coverartarchive.org/release/${coverId}/front-250`
        : null;
    
    const handleImageError = (e) => {
        e.target.src = "https://placehold.co/250x250?text=No+Cover+Art";
    }
    
    return (
        <div className="ssi-container">
            <img 
                src={coverUrl} 
                alt={`${title} cover art`}
                onError={handleImageError}
                className="album-cover"
            />
            <div className="ssi-info">
                <h3 className="header-font">{title}</h3>
                <h3 className="subtitle">{artist} • {date ? date.substring(0, 4) : "Unknown"}</h3>
                <div className="ssi-remove-song">
                    <h3 className="subtitle">{trackCount} Song{trackCount > 1 ? "s" : ""}</h3>
                    <button className="primary-button" onClick={() => removeRelease(id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default SelectedSongItem;