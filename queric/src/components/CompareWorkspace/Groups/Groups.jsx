import { useState } from "react";

import GroupItem from "../GroupItem/GroupItem";
import "./Groups.css";

function Groups ({ groups, editGroupName, deleteGroup }) {
    return (
        <div className="manage-groups-container">
            <p className="header-font">Groups</p>
            {groups?.map((group) => (
                <GroupItem 
                    key={group.id} 
                    group={group} 
                    editGroupName={editGroupName}
                    deleteGroup={deleteGroup} />
            ))}
        </div>
    )
}

export default Groups;