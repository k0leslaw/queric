function ArtistList ({artists, onRemove}) {
    return(
        <h4>
            Artists: {artists.map((artist, i) => (
                        <span 
                            key = {i} 
                            className='artist-list-item' 
                            onClick={() => onRemove(artist)} 
                        >
                            {artist.name}{i < artists.length - 1 ? ', ' : ''} 
                        </span>))}
        </h4>
    )
}

export default ArtistList;