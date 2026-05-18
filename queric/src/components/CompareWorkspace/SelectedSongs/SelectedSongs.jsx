import { useState, useEffect } from "react";
import SelectedSongItem from "../SelectedSongItem/SelectedSongItem";
import AddSongPopup from "../AddSongPopup/AddSongPopup";
import "./SelectedSongs.css";

function SelectedSongs () {
    const [selectedReleases, setSelectedReleases] = useState([]);
    const [isAddingSong, setIsAddingSong] = useState(false);
    const [numReleases, setNumReleases] = useState(0);

    const addRelease = async (newRelease) => {
        if (selectedReleases.some(release => release.id === newRelease.id)) {
            alert("This release is already selected");
            return false;
        }
        setSelectedReleases((prevReleases) => [...prevReleases, newRelease]);
        return true;
    }

    const removeRelease = (idToRemove) => { 
        if (confirm("Are you sure you want to remove this release?")) {
            let updatedSelectedReleases = selectedReleases.filter(release => release.id !== idToRemove);
            setSelectedReleases(updatedSelectedReleases);  
        }
    }

    const clearReleases = () => {
        if (confirm("Are you sure you want to remove all selected releases?")) {
            setSelectedReleases([]);   
        }
    }

    return (
        <div className="selected-songs-container">
            <div className="ss-header">
                <h2 className="header-font">{selectedReleases.length} Selected Release{numReleases > 1 || numReleases == 0? "s" : ""}</h2>
                
            </div>
            <div className="ss-songs">
                {selectedReleases.map((release, index) => {
                    return (
                        <SelectedSongItem 
                            key={index} 
                            id={release.id}
                            title={release.title} 
                            artist={release.artist} 
                            date={release.date}
                            trackCount={release.trackCount}
                            coverId={release.coverId}
                            removeRelease={removeRelease} 
                        />
                    )
                })}
            </div>
            <div className="ss-footer">
                <button className="primary-button" onClick={() => setIsAddingSong(true)}>Add Release</button>
                <button className="secondary-button" onClick={clearReleases}>Clear</button>
            </div>

            {isAddingSong && <AddSongPopup setIsAddingSong={setIsAddingSong} addRelease={addRelease} />}
        </div>
    )
}

export default SelectedSongs;