import { useState, useEffect } from "react";
import SelectedSongItem from "../SelectedSongItem/SelectedSongItem";
import AddSongPopup from "../AddSongPopup/AddSongPopup";
import "./SelectedSongs.css";

function SelectedSongs ({ selectedSongs, removeRelease, clearReleases, onItemSelect }) {
    const [isAddingSong, setIsAddingSong] = useState(false);

    return (
        <div className="selected-songs-container">
            <div className="ss-header">
                <h2 className="header-font">{selectedSongs.length} Selected Release{selectedSongs.length !== 1 ? "s" : ""}</h2>
            </div>
            <div className="ss-songs">
                {selectedSongs.map((song) => (
                    <SelectedSongItem 
                            key={song.id} 
                            id={song.id}
                            title={song.title} 
                            artist={song.artist} 
                            date={song.date}
                            trackCount={song.trackCount}
                            coverUrl={song.coverUrl}
                            removeRelease={removeRelease} />
                ))}
            </div>
            <div className="ss-footer">
                <button className="primary-button" onClick={() => setIsAddingSong(true)}>Add Release</button>
                <button className="secondary-button" onClick={clearReleases}>Clear</button>
            </div>

            {isAddingSong && <AddSongPopup setIsAddingSong={setIsAddingSong} onItemSelect={onItemSelect} />}
        </div>
    )
}

export default SelectedSongs;