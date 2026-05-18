import "./SearchResult.css";

function SearchResult ({ title, release, releaseType, artistArray, releaseDate, trackCount, addRelease, setIsAddingSong }) {
    const coverTargetId = releaseType === "album"
            ? release.id
            : release.releases?.[0]?.id;

        const coverUrl = coverTargetId
            ? `https://coverartarchive.org/release/${coverTargetId}/front-250`
            : null;

        const handleImageError = (e) => {
            e.target.src = "https://placehold.co/250x250?text=No+Cover+Art";
        }

    const handleAddRelease = async () => {
        const selection = {
            id: release.id,
            type: releaseType,
            title: title,
            artist: artistArray.map(a => a.name).join(", "),
            date: releaseDate,
            trackCount: trackCount,
            coverId: coverTargetId,
            raw: release
        }

        if (await addRelease(selection)) {
            setIsAddingSong(false);
        }
    }
    
    return (
        <div className="search-result-container">
            <img 
                src={`https://coverartarchive.org/release/${coverTargetId}/front-250`}
                alt={`${title} cover art`}
                onError={handleImageError}
                className="search-result-image"
            />
            <div className="sr-mid-container">
                <p>{title}</p>
                <div className="sr-text-container">
                    <p>{artistArray.map(artist => artist.name).join(", ")}</p>
                    {releaseDate != "" && <p>({releaseDate.substring(0, 4)})</p>}
                </div>
            </div>
            
            <button className="secondary-button" onClick={handleAddRelease}>Add</button>
        </div>
    )
}

export default SearchResult;