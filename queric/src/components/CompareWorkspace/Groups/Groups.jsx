import { useState } from "react";

import "./Groups.css";

function Groups ({ groups }) {
    return (
        <div className="manage-groups-container">
            {groups?.map((group) => (
                <div key={group.id} className="group-song-container">
                    
                    <div>
                        {group.songs?.map((song) => (
                            <div key={song.id} className="group-song-container">
                                <img className="album-cover" src={song.coverUrl}/>
                                <p>{song.title || "Unknown Title"}</p>
                                <p>{song.artist || "Unknown Artist"}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Groups;