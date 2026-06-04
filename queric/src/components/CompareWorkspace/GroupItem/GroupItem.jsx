import { useState } from "react";

import "./GroupItem.css";

function GroupItem ({ group, editGroup }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="group-container">
            <div className="group-header">
                <p>{group.name}</p>
                <div>
                    {isOpen && <button onClick={() => (editGroup(group.id, "NEW NAME"))}>E</button>}
                    <button onClick={() => (setIsOpen(!isOpen))}>^</button>
                </div>
            </div>
            <div className="gs-songs">
                {isOpen && group.songs?.map((song) => (
                    <div key={song.id} className="group-song-container">
                        <img className="album-cover" src={song.coverUrl}/>
                        <div>
                            <p>{song.title || "Unknown Title"}</p>
                            <p>{song.artist || "Unknown Artist"}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GroupItem;