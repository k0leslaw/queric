import RecentUploadItem from "../RecentUploadItem/RecentUploadItem";

import "./RecentUploads.css";

function RecentUploads () {
    return (
        <div className="ru-container">
            <div className="ru-header">
                <h2 className="header-font">Recent Uploads</h2>
                <h3 className="subtitle">Manage recent items</h3>
            </div>
            <div className="ru-item-container">
                <RecentUploadItem />
                <RecentUploadItem />
                <RecentUploadItem />
            </div>
        </div>
    )
}

export default RecentUploads;