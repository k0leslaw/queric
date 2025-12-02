import './ArtistData.css';

function ArtistData ({ artist }) {
    return (
        <div className="artist-data-container">
            <div className='artist-header'>
                <h2>{artist.name}</h2>
                <h5>Across 3 songs and {artist.word_count} words...</h5>
            </div>
            <div className="artist-data-section">
                <div className='section-header'>
                    <h3>Uniqueness</h3>
                </div>
                <div className='favorite-words'>
                    <div>
                        <h4>Favorite word: {artist.most_common[0][0]}</h4>
                    </div>
                    <div className='other-favorite-words-body'>
                        <h5>Other favorites included: </h5>
                        {artist.most_common.map((word, i) => (
                            <p key={i}>
                                '{word[0]}' x{word[1]},
                            </p>
                        ))}
                    </div>
                </div>
                <h4>On average, {Math.floor(artist.unique_count / artist.word_count * 100)}% of words per song are unique [CURRENTLY OUT OF ALL SONGS]</h4>
                <input 
                    className='uniqueness-search'
                    type='text'
                    placeholder='Search for a word...'/>
                <button>Go</button>
                <h4>{'sample-string'} appears {0} times across {0} songs.</h4>
            </div>
            <div className="artist-data-section">
                <h3 className='section-header'>Complexity</h3>
            </div>
            <div className="artist-data-section">
                <h3 className='section-header'>Parts of Speech</h3>
                <h4>{Math.floor(artist.verb_count / artist.word_count * 100)}% verbs - favorite verb: '{artist.favorite_verb[0][0]}', used {artist.favorite_verb[0][1]} times</h4>
                <h4>{Math.floor(artist.adjective_count / artist.word_count * 100)}% adjectives - favorite adjective: '{artist.favorite_adjective[0][0]}'', used {artist.favorite_adjective[0][1]} times</h4>
                <h4>{Math.floor(artist.noun_count / artist.word_count * 100)}% nouns - favorite noun: '{artist.favorite_noun[0][0]}', used {artist.favorite_noun[0][1]} times</h4>
                <h4>{Math.floor(artist.pronoun_count / artist.word_count * 100)}% pronouns - favorite pronoun: '{artist.favorite_pronoun[0][0]}', used {artist.favorite_pronoun[0][1]} times</h4>
            </div>
            <div className="artist-data-section">
                <h3 className='section-header'>Literary Devices</h3>
            </div>
            <div className="artist-data-section">
                <h3 className='section-header'>Wordiness</h3>
            </div>
        </div>
    )
}

export default ArtistData;