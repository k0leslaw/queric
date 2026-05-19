import { useState, useEffect } from "react";
import SearchResult from "../SearchResult/SearchResult";

import "./AddSongPopup.css";

function AddSongPopup ({ setIsAddingSong, onItemSelect }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            setSearching(false);
            return;
        }

        setSearching(true);

        const delayTimer = setTimeout(async () => {
            try {
                const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song,album&limit=15`;
                const response = await fetch(url);
                const data = await response.json();
                setResults(data.results || []);
            } catch (err) {
                console.error("Error fetching search results:", err);
            } finally {
                setSearching(false);
            }
        }, 500);

        return () => clearTimeout(delayTimer);
    }, [query]);

    return (
        <div className="add-song-popup">
            <h2 className="header-font">Search</h2>
            <div className="search-inputs-container">
                <input 
                    className="subtitle"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by song, album, or artist..."/>
            </div>

            <div className="search-results-container">
                {results.map((item, index) => (
                    <SearchResult 
                        key={item.trackId || item.collectionId || index} 
                        item={item}
                        onSelect={() => {
                            onItemSelect(item);
                            setIsAddingSong(false);
                        }} />
                ))}
                {!searching && query && results.length === 0 && (
                    <p>No releases found.</p>
                )}
            </div>
        </div>
    )
}

export default AddSongPopup;