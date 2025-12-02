function ArtistList ({artists, onRemove}) {
    return(
        <>
        {artists.length > 0 ? <h3>Selected Artists:</h3> : <h3></h3>}
        <h4 className="selected-artist-list">
            {artists.map((artist, i) => (
                <span 
                    key = {i} 
                    className='artist-list-item' 
                    onClick={() => onRemove(artist)} 
                >
                    {artist.name}{i < artists.length - 1 ? ', ' : ''} 
                </span>)
            )}
        </h4>
        {artists.length > 0 ? <h5>Click an artist to delete them.</h5> : <h5></h5>}
        </>
    )
}

export default ArtistList;