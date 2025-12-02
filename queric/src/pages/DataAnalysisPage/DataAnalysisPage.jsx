import { useLocation, useNavigate } from "react-router-dom"
import ArtistData from "../../components/ArtistData/ArtistData";

import './DataAnalysisPage.css';

function DataAnalysisPage () {
    const location = useLocation();
    const navigate = useNavigate();

    /**
     * data[x]:
     * "name": artist name
     * "word count": total word count in all analyzed songs
     * "verbs": number of verbs in all analyzed songs
     * "adjectives": number of adjectives in all analyzed songs
     * "nouns": number of nouns in all analyzed songs
     * "pronouns": number of pronouns in all analyzed songs
     * "most common": most commonly used words and their frequency
     */
    const data = location.state;

    const goHome = () => {
        navigate('/');
    }

    return(
        <div className='all-artists-data-container'>
            {data.map((artist, i) => (
                <ArtistData key={i} artist={artist} />
            ))}
            <button onClick={goHome}>Home</button>
        </div>
    )
}

export default DataAnalysisPage