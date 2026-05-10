import './SearchBar.css';

import { useState, useCallback, useMemo } from "react";
import debounce from 'lodash/debounce';

function SearchBar ({ onAddArtist }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cursorStyle = isLoading ? 'wait' : 'text';

    const fetchSuggestions = useCallback(async (query) => {
        setSuggestions([])
        if (!query.trim()) return;
        
        const response = await fetch(`/api/search-bar-suggest-artists?query=${query}`);
        if (!response.ok) {
            setSuggestions([]);
        } else {
            const data = await response.json();
            setSuggestions(data.suggestions);
        }
    }, []);

    const debouncedFetch = useMemo(
        () => debounce(fetchSuggestions, 300),
        [fetchSuggestions]
    );

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        debouncedFetch(e.target.value);
    }

    const handleSelectSuggestion = (suggestion) => {
        setSearchTerm(suggestion);
        setSuggestions([]);

        debouncedFetch.cancel();
    }

    const handleAddArtist = async () => {
        if (searchTerm.trim().length === 0) {
            window.alert('Please type an artist into the search bar.')
            return;
        }
        setSuggestions([]);
        setIsLoading(true);
        await onAddArtist(searchTerm);
        setIsLoading(false);
        setSuggestions([]);
    }

    return (
        <div className="search-container">
            <h3>Global Search</h3>
            <div className="search-bar-container">
                <input
                    className="search-bar" 
                    style={{ cursor: cursorStyle }}
                    id="artist-search-bar"
                    type="text" 
                    placeholder="e.g., 'Kendrick Lamar, DAMN., DNA'" 
                    
                />
                <div className="search-buttons-container">
                    <button className="primary-button">Search</button>
                    <button className="secondary-button">Batch Upload</button>
                    <button className="primary-button">Compare Mode</button>
                </div>
            </div>
            <div className="search-suggestions">
                <h3>Try: Billie Eilish, When We All Fall Asleep</h3>
                <h3>Try: The Beatles, Bob Dylan</h3>
                <h3>Try: Classic rock</h3>
            </div>
            <h3>Filters</h3>
            <div className="search-filters">
                <label>
                    <input type="checkbox"/>
                    <span>Artist</span>
                </label>
                <label>
                    <input type="checkbox"/>
                    <span>Album</span>
                </label>
                <label>
                    <input type="checkbox"/>
                    <span>Song</span>
                </label>
                <label>
                    <input type="checkbox"/>
                    <span>Year</span>
                </label>
                <label>
                    <input type="checkbox"/>
                    <span>Language</span>
                </label>
                <label>
                    <input type="checkbox"/>
                    <span>Genre</span>
                </label>
            </div>
        </div>
    );
}

export default SearchBar;