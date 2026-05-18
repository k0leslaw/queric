import "./SearchResult.css";

function SearchResult ({ title, release, releaseType, artistArray, releaseDate, trackCount, coverId, addRelease, setIsAddingSong }) {
    const handleAddRelease = async () => {
        const coverTargetId = releaseType === "album"
            ? release.id
            : release.releases?.[0]?.id;

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
        <div>
            <p>Title: {title}</p>
            <p>{artistArray.map(artist => artist.name).join(", ")}</p>
            {releaseDate != "" && <p>Released: {releaseDate}</p>}
            <button onClick={handleAddRelease}>Add</button>
        </div>
    )
}

export default SearchResult;