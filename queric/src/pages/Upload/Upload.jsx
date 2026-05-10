import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import UploadFile from "../../components/UploadPage/UploadFile/UploadFile.jsx";
import ProcessingQueue from "../../components/UploadPage/ProcessingQueue/ProcessingQueue.jsx";
import AnalysisSettings from "../../components/UploadPage/AnalysisSettings/AnalysisSettings.jsx";
import CompletedAnalyses from "../../components/UploadPage/CompletedAnalyses/CompletedAnalyses.jsx";
import RecentUploads from "../../components/UploadPage/RecentUploads/RecentUploads.jsx";

import "./Upload.css";

function Upload () {
    return (
        <div>
            <NavigationBar />
            <div className="upload-and-analyze-container">
                <div className="ua-left-container">
                    <div className="upload-file-container">
                        <UploadFile />
                    </div>
                    <div className="analysis-settings-container">
                        <AnalysisSettings />
                    </div>
                    <div className="recent-uploads-container">
                        <RecentUploads />
                    </div>
                </div>
                <div className="ua-right-container">
                    <div className="queue-container">
                        <ProcessingQueue />
                    </div>
                    <div className="completed-container">
                        <CompletedAnalyses />
                    </div>
                    <div className="ua-buttons-container">
                        <button className="secondary-button">See Previous Uploads</button>
                        <button className="secondary-button">Open Compare Workspace</button>
                        <button className="secondary-button">Clear Completed</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Upload;