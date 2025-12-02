import './SearchBar.css';

import { BiSearchAlt } from "react-icons/bi";
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
        <div className="artist-search-wrapper">
            <div id='artist-search-bar-container'>
                <BiSearchAlt className='search-icon'/>
                <input 
                    style={{ cursor: cursorStyle }}
                    id='artist-search-bar'
                    type='text' 
                    placeholder='Search for an artist...' 
                    value={searchTerm}
                    autoComplete='off'
                    readOnly={isLoading}
                    onChange={handleChange}
                />
            </div>
            <button className="add-button" onClick={handleAddArtist}>+</button>
            {suggestions.length > 0 && (
                <ul className="suggestions-dropdown" >
                    {suggestions.map((suggestion, i) => (
                        <li className='artist-suggestion' key={i} onClick={() => handleSelectSuggestion(suggestion)}>
                            {suggestion}
                        </li>
                    ))}

                </ul>
            )}
        </div>
    );
}

export default SearchBar;