import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import SelectedSongs from "../../components/CompareWorkspace/SelectedSongs/SelectedSongs";
import WorkspaceInfo from "../../components/CompareWorkspace/WorkspaceInfo/WorkspaceInfo";

import "./CompareWorkspace.css";

function CompareWorkspace () {
    return (
        <div>
            <NavigationBar />
            <div className="compare-workspace-container">
                <div className="cw-left">
                    <SelectedSongs />
                    <div className="ac-button-container">
                        <button className="primary-button add-chart-button">Add Chart</button>
                    </div>
                    <WorkspaceInfo />
                </div>
                <div className="cw-right">
                    right
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CompareWorkspace;