import { useState, useEffect } from "react";
import SelectedSongItem from "../SelectedSongItem/SelectedSongItem";
import AddSongPopup from "../AddSongPopup/AddSongPopup";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import "./SelectedSongs.css";

function SelectedSongs ({ selectedSongs, clearReleases, removeSelectedReleases, onItemSelect, handleAddGroup, groups }) {
    const [isOpen, setIsOpen] = useState(true);
    const [isAddingSong, setIsAddingSong] = useState(false);
    const [songsSelected, setSongsSelected] = useState([]);

    return (
        <div className="selected-songs-container">
            <div className="ss-header">
                <h2 className="header-font">{selectedSongs.length} Track{selectedSongs.length !== 1 ? "s" : ""}</h2>
                {selectedSongs.length > 0 ?
                    <div className="ss-header-buttons">
                        <button className="secondary-button" onClick={clearReleases}>Clear</button>
                        <button className="primary-button" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                        </button>
                    </div>
                : <></>}
            </div>
            <div className="ss-songs">
                {isOpen && selectedSongs.map((song) => (
                    <SelectedSongItem 
                            key={song.id} 
                            song={song}
                            songsSelected={songsSelected}
                            setSongsSelected={setSongsSelected} />
                ))}
            </div>
            <div className="ss-footer">
                <button className="primary-button" onClick={() => setIsAddingSong(true)}>Add Release</button>
                {isOpen && selectedSongs.length > 0 && 
                    <button 
                        className="secondary-button" 
                        onClick={() => {
                            const idsToDelete = songsSelected.map(song => song.id);
                            removeSelectedReleases(idsToDelete); 
                            setSongsSelected([]); 
                            }}
                        >
                            Delete
                    </button>}
                {isOpen && selectedSongs.length > 0 && 
                    <button 
                        className="secondary-button" 
                        onClick={() => {
                            handleAddGroup(`Group ${groups.length + 1}`, songsSelected); 
                            setSongsSelected([]); }}
                        >
                            Group
                    </button>}        
            </div>

            {isAddingSong && <AddSongPopup setIsAddingSong={setIsAddingSong} onItemSelect={onItemSelect} />}
        </div>
    )
}

export default SelectedSongs;