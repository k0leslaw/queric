import "./RecentUploadItem.css";

function RecentUploadItem () {
    return (
        <div className="rui-container">
            <div className="rui-left">
                <h3>how_does_it_feel.txt</h3>
                <h3 className="subtitle">Uploaded 12m ago • Quick Summary</h3>
            </div>
            <div className="rui-right">
                <button className="secondary-button">Reprocess</button>
                <button className="secondary-button">Open</button>
            </div>
        </div>
    )
}

export default RecentUploadItem;