import "./UploadFile.css";

function UploadFile () {
    return (
        <div className="upload-lyrics-container">
            <div className="ua-header-container">
                <h1 className="header-font">Upload & Paste Lyrics</h1>
                <h3 className="subtitle">Drag & drop a file, click to select, or paste plain text into the box below. Accepted formats: .txt, .docx</h3>
            </div>

            <div className="text-upload-container">
                <div className="file-upload">
                    <div className="ua-file-upload-header">
                        <h3 className="header-font">Drag & Drop Files</h3>
                        <h3 className="subtitle">One file at a time</h3>
                    </div>
                    <div className="ua-file-upload-body">
                        <h3>Drop a file here, or:</h3>
                        <button className="primary-button">Click to upload file</button>
                    </div>
                </div>
                <div className="copy-paste-upload">
                    <h3>Paste or type lyrics</h3>
                    <textarea placeholder="Paste lyrics or start typing..."></textarea>
                </div>
            </div>
        </div>
    )
}

export default UploadFile;