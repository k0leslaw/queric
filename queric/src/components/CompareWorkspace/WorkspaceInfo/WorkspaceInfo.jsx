import "./WorkspaceInfo.css";

function WorkspaceInfo () {
    return (
        <div className="workspace-info-container">
            <h2 className="header-font">Save & Export</h2>
            <div className="wi-entry-container">
                <div className="wi-entry">
                    <h3>Visibility</h3>
                    <select>
                        <option>Link only</option>
                        <option>Public</option>
                        <option>Private</option>
                    </select>
                </div>
                <div className="wi-entry">
                    <h3>Title</h3>
                    <input 
                        type="text"
                        placeholder="Workspace title"/>
                </div>
                <div className="wi-entry">
                    <h3>Desc</h3>
                    <textarea 
                        placeholder="Workspace description"/>
                </div>
            </div>
            <div className="wi-buttons">
                <button className="primary-button">Save</button>
                <button className="secondary-button">Export</button>
            </div>
        </div>
    )
}

export default WorkspaceInfo;