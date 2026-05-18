import { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";

import "./AddSongPopup.css";

function AddSongPopup ({ setIsAddingSong, addRelease }) {
    const [searchTypeIsSong, setSearchTypeIsSong] = useState(true);
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const MB_URL = "https://musicbrainz.org/ws/2/";
    const MB_USER_AGENT = import.meta.env.VITE_MUSICBRAINZ_USER_AGENT;

    const handleSearch = async () => {
        if (!title.trim()) {
            alert("Please enter a title.");
            return;
        }

        try {
            const endpoint = searchTypeIsSong ? "recording" : "release";
            const includeTracks = !searchTypeIsSong ? "&inc=recordings" : "";
            
            let query = `${endpoint}:"${title.trim()}"`;
            if (artist.trim()) {
                const artistKey = searchTypeIsSong ? "artistname" : "artist";
                query += ` AND ${artistKey}:"${artist.trim()}"`;
            }

            const url = `${MB_URL}${endpoint}?query=${encodeURIComponent(query)}${includeTracks}&fmt=json`;

            const response = await fetch(url, {
                headers: {
                    "User-Agent": MB_USER_AGENT,
                    "Accept": "application/json"
                }
            });

            if (!response.ok) throw new Error("Cannot fetch search results");

            const result = await response.json();
            
            if (searchTypeIsSong) {
                const releases = result.recordings || [];
                setSearchResult(releases);
            } else {
                const albumTracks = result.releases || [];
                setSearchResult(albumTracks);
            }
        } catch (err) {
            console.error("Error fetching search results:", err);
        }
    }

    return (
        <div className="add-song-popup">
            <form>
                <h2 className="header-font">Search Type</h2>
                <label>
                    <input 
                        className="subtitle"
                        type="radio"
                        name="search-type"
                        value="song"
                        checked={searchTypeIsSong === true}
                        onChange={() => setSearchTypeIsSong(true)}
                        /> Song
                </label>
                <br/>
                <label>
                    <input 
                        className="subtitle"
                        type="radio"
                        name="search-type"
                        value="album"
                        checked={searchTypeIsSong === false}
                        onChange={() => setSearchTypeIsSong(false)}
                        /> Album
                </label>
            </form>
            <div className="search-inputs-container">
                <input 
                    className="subtitle"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"/>
                <input 
                    className="subtitle"
                    type="text"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    placeholder="Artist (optional)"/>
            </div>
            
            <button className="primary-button" onClick={handleSearch}>Search</button>

            {searchResult.map((result, index) => (
                <SearchResult 
                    key={index} 
                    addRelease={addRelease} 
                    release={result} 
                    releaseType={searchTypeIsSong ? "song" : "album"} 
                    title={result.title} 
                    artistArray={result["artist-credit"] || []} 
                    releaseDate={searchTypeIsSong ? result["first-release-date"] : result["date"] || ""} 
                    trackCount={searchTypeIsSong ? 1 : result["track-count"]}
                    setIsAddingSong={setIsAddingSong}
                />
            ))}
        </div>
    )
}

export default AddSongPopup;