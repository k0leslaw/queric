import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar/SearchBar";
import ArtistList from "../components/ArtistList/ArtistList";

function HomePage () {
    const navigate = useNavigate();
    const [artists, setArtists] = useState([]);
    const [analyzedData, setAnalyzedData] = useState([]);

    const onAddArtist = async (searchTerm) => {
        const response = await fetch('/api/search-artist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON' },
            body: JSON.stringify({ artist: searchTerm })
        });

        if (response.status === 200) {
            const data = await response.json();

            setArtists(prev => [...prev, data.artist]);
        } else {
            console.log('Artist not found')
        }
    }

    const removeArtist = (artistToRemove) => {
        const updatedArtists = artists.filter((artist) => artist !== artistToRemove);
        setArtists(updatedArtists);
    }

    const analyzeArtistLyrics = async () => {
        if (artists.length < 1) {
            window.alert('Please add at least one artist.');
        } else {
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
    }

    return (
        <div className="home-page"> 
            <h2>Queric</h2>
            <SearchBar onAddArtist={onAddArtist} />
            <div className="artist-list-wrapper">
                <ArtistList artists={artists} onRemove={removeArtist}/>
                <button className="analyze-button" onClick={analyzeArtistLyrics}>Analyze!</button>
            </div>
        </div>
    );
}

export default HomePage;