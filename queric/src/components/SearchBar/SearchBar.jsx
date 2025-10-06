import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

import './SearchBar.css';

function SearchBar ({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [timeoutId, setTimeoutId] = useState(null);

    const fetchSuggestions = async (query) => {
        const response = await fetch(`/api/search-bar-suggest-artists?query=${query}`);
        if (response.ok) {
            const data = await response.json();
            setSuggestions(data.suggestions);
        } else {
            setSuggestions([]);
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (timeoutId) clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(() => {
            if (value.trim() !== '') {
                fetchSuggestions(value);
            } else {
                setSuggestions([]);
            }
        }, 150);
        setTimeoutId(newTimeoutId);
    }

    const handleSelectSuggestion = (suggestion) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
        onSearch(suggestion);
    }

    const handleSearchClick = () => {
        if (searchTerm.trim() !== '') {
            setSuggestions([]);
            onSearch(searchTerm);
        }
    }

    return (
        <div id='artist-search-bar-container'>
            <input 
                id='artist-search-bar'
                type='text' 
                placeholder='Search for an artist...' 
                value={searchTerm}
                autoComplete='off'
                onChange={handleChange}
            />
            <BiSearchAlt id='search-icon' onClick={handleSearchClick} />
            
            {suggestions.length > 0 && (
                <ul className="suggestions-dropdown">
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