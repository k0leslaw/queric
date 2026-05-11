import SelectedSongItem from "../SelectedSongItem/SelectedSongItem";

import "./SelectedSongs.css";

function SelectedSongs () {
    return (
        <div className="selected-songs-container">
            <div className="ss-header">
                <h2 className="header-font">Selected Songs (4)</h2>
                <button className="secondary-button">Clear</button>
            </div>
            <div className="ss-songs">
                <SelectedSongItem />
                <SelectedSongItem />
                <SelectedSongItem />
                <SelectedSongItem />
            </div>
            <div className="ss-footer">
                <button className="primary-button">Add Song</button>
                <button className="secondary-button">Bulk Add</button>
            </div>
        </div>
    )
}

export default SelectedSongs;