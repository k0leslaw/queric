import { useLocation } from "react-router-dom"

import './DataAnalysisPage.css';

function DataAnalysisPage () {
    const location = useLocation();

    /**
     * data[x]:
     * "name": artist name
     * "word count": total word count in all analyzed songs
     * "verbs": number of verbs in all analyzed songs
     * "adjectives": number of adjectives in all analyzed songs
     * "nouns": number of nouns in all analyzed songs
     * "pronouns": number of pronouns in all analyzed songs
     */
    const data = location.state;

    return(
        <div className='analysis-data-container'>
            {data.map((artist, i) => (
                <div key={i}>
                    <h2>{artist.name}</h2>
                    <h5>Across 3 songs and {artist['word count']} words...</h5>
                    <h4>{Math.floor(artist.verbs / artist['word count'] * 100)}% verbs</h4>
                    <h4>{Math.floor(artist.adjectives / artist['word count'] * 100)}% adjectives</h4>
                    <h4>{Math.floor(artist.nouns / artist['word count'] * 100)}% nouns</h4>
                    <h4>{Math.floor(artist.pronouns / artist['word count'] * 100)}% pronouns</h4>
                </div>
            ))}
        </div>
    )
}

export default DataAnalysisPage