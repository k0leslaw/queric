import "./SearchResult.css";

function SearchResult ({ item, onSelect }) {
    const isAlbum = item.wrapperType === "collection";
    const displayTitle = isAlbum ? item.collectionName : item.trackName;
    const subtitleContext = isAlbum ? `${item.artistName} • Album` : `${item.artistName} • Track`;
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
                <div className="sr-titles">
                    <p className="sr-song-title">{displayTitle}</p>
                    <div className="sr-artist-year">
                        <p>{releaseYear} {subtitleContext}</p>
                    </div>
                    
                </div>
                <div className="sr-text-container">
                    
                    <p className="sr-album-title">{/*albumName || "Unknown album"} {disambiguation*/}</p>
                </div>
            </div>
            
            <button className="secondary-button" onClick={onSelect}>{isAlbum ? "Add Album" : "Add Track"}</button>
        </div>
    )
}

export default SearchResult;