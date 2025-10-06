import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar/SearchBar";
import ArtistList from "../components/ArtistList/ArtistList";

function HomePage () {
    const navigate = useNavigate();
    const [artists, setArtists] = useState([]);
    const [analyzedData, setAnalyzedData] = useState([]);

    useEffect (() => {
        
    }, [artists])


    const searchArtist = async (searchTerm) => {
        const response = await fetch('/api/search-artist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON' },
            body: JSON.stringify({ artist: searchTerm })
        });

        if (response.status === 200) {
            const data = await response.json();

            setArtists([...artists, data.artist])
        } else {
            console.log('Artist not found')
        }
    }

    const removeArtist = (artistToRemove) => {
        const updatedArtists = artists.filter((artist) => artist !== artistToRemove);
        setArtists(updatedArtists);
    }

    const analyzeArtistLyrics = async () => {
        const response = await fetch('/api/analyze-artists', {
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON' },
            body: JSON.stringify({ artists })
        });

        if (response.status === 200) {
            const data = await response.json();
            setAnalyzedData(data.results);
            navigate('/analysis', { state: data.results });
        } else {
            console.log('analysis failed')
        }
    }

    return (
        <div> 
            <h2>Queric</h2>
            <SearchBar onSearch={searchArtist} />
            <div>
                <ArtistList artists={artists} onRemove={removeArtist}/>
                <button onClick={analyzeArtistLyrics}>Analyze!</button>
            </div>
        </div>
    );
}

export default HomePage;