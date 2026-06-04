import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

import "./GroupItem.css";

function GroupItem ({ group, editGroupName, deleteGroup }) {
    const [isOpen, setIsOpen] = useState(false);
    const [newName, setNewName] = useState(group.name);

    const toggleGroup = () => {
        if (isOpen && newName !== group.name) {
            editGroupName(group.id, newName);
        }
        setIsOpen(!isOpen);
    }

    return (
        <div className="group-container">
            <div className="group-header">
                <p>{!isOpen ? 
                        group.name : 
                        <input 
                            type="text" value={newName} onChange={(e) => (setNewName(e.target.value))}/>}</p>
                <div>
                    {isOpen && <button className="secondary-button" onClick={() => (deleteGroup(group.id))}>
                        <FiTrash2 />
                    </button>}
                    <button className="primary-button" onClick={toggleGroup}>
                        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
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