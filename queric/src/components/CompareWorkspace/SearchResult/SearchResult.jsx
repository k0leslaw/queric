import "./SearchResult.css";

function SearchResult ({ item, onSelect }) {
    const isAlbum = item.wrapperType === "collection";
    const displayTitle = isAlbum ? item.collectionName : item.trackName;
    const releaseYear = item.releaseDate ? item.releaseDate.substring(0, 4) : "";
    
    const fallbackCoverArt = (e) => {
        e.target.src = "https://placehold.co/250x250?text=No+Cover+Art";
    }
    
    return (
        <div className="search-result-container">
            <img 
                src={item.artworkUrl100 ? item.artworkUrl100.replace("100x100bb.jpg", "150x150bb.jpg") : "https://placehold.co/150x150?text=No+Cover"}
                alt={`${item.trackName} cover art`}
                onError={fallbackCoverArt}
                className="search-result-image"
            />
            <div className="sr-mid-container">
                <div className="sr-text">
                    <p className="sr-song-title">{displayTitle}</p>
                    <p className="sr-album">{isAlbum ? "" : item.collectionName}</p>
                    <p className="sr-artist">{item.artistName} • {releaseYear}</p>
                    <p className="sr-trackcount">{isAlbum ? item.trackCount : ""} {isAlbum ? "tracks" : ""}</p>          
                </div>
            </div>
            
            <button className="secondary-button" onClick={onSelect}>{isAlbum ? "Add Album" : "Add Track"}</button>
        </div>
    )
}

export default SearchResult;