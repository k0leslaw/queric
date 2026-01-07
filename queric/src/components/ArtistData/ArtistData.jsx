import './ArtistData.css';

import { useState } from 'react';

function ArtistData ({ artist }) {
    console.log(artist);
    const [numFavorites, setNumFavorites] = useState(5);
    const [searchWord, setSearchWord] = useState('');

    const handleNumFavoritesChange = (e) => {
        setNumFavorites(e.target.valueAsNumber);
    }

    const handleChangeSearchWord = (e) => {
        setSearchWord(e.target.value);
    }

    const searchForWord = () => {
        console.log(artist);
    }

    return (
        <div className="artist-data-container">
            <div className='artist-header'>
                <h2>{artist.name}</h2>
                <h5>Across top {artist.num_songs} songs and {artist.word_count} words...</h5>
            </div>
            <div className="artist-data-section">
                <h3 className='section-header'>Uniqueness</h3>
                <h4>On average, {Math.floor(artist.unique_count / artist.word_count * 100)}% of words per song are unique [CURRENTLY OUT OF ALL SONGS]</h4>
                <div className='favorite-words'>
                    <div className='favorite-words-body'>
                        <table className='favorite-words-table'>
                            <thead>
                                <tr>
                                    <th className='favorite-words-header'>
                                        <input 
                                            className='favorite-words-input'
                                            value={numFavorites}
                                            type='number'
                                            max={15}
                                            min={1}
                                            onChange={handleNumFavoritesChange} />
                                        Favorite Words
                                    </th>
                                    <th>Frequency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {artist.most_common.slice(0, numFavorites).map((word, i) => (
                                    <tr key={i}>
                                        <td>{word[0]}</td>
                                        <td>{word[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <input 
                    className='uniqueness-search'
                    type='text'
                    value={searchWord}
                    placeholder='Search for a word...'
                    onChange={handleChangeSearchWord}/>
                <button onClick={searchForWord}>Go</button>
                <h4>{searchWord ? searchWord : '____'} appears {0} times across {0} songs.</h4>
            </div>
            <div className="artist-data-section">
                <h3 className='section-header'>Complexity</h3>
            </div>
            <div className="artist-data-section">
                <h3 className='section-header'>Parts of Speech</h3>
                <table className='parts-of-speech'>
                    <thead>
                        <tr>
                            <th className='pos-th'></th>
                            <th>Favorite</th>
                            <th>Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='pos-percent'>{Math.floor(artist.verb_count / artist.word_count * 100)}% verbs</td>
                            <td>'{artist.favorite_verb[0][0]}'</td>
                            <td>{artist.favorite_verb[0][1]}</td>
                        </tr>
                        <tr>
                            <td className='pos-percent'>{Math.floor(artist.adjective_count / artist.word_count * 100)}% adjectives</td>
                            <td>'{artist.favorite_adjective[0][0]}'</td>
                            <td>{artist.favorite_adjective[0][1]}</td>
                        </tr>
                        <tr>
                            <td className='pos-percent'>{Math.floor(artist.noun_count / artist.word_count * 100)}% nouns</td>
                            <td>'{artist.favorite_noun[0][0]}'</td>
                            <td>{artist.favorite_noun[0][1]}</td>
                        </tr>
                        <tr>
                            <td className='pos-percent'>{Math.floor(artist.pronoun_count / artist.word_count * 100)}% pronouns</td>
                            <td>'{artist.favorite_pronoun[0][0]}'</td>
                            <td>{artist.favorite_pronoun[0][1]}</td>
                        </tr>
                    </tbody>
                </table>
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