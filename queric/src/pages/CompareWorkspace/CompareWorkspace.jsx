import { useState } from "react";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import SelectedSongs from "../../components/CompareWorkspace/SelectedSongs/SelectedSongs";
import WorkspaceInfo from "../../components/CompareWorkspace/WorkspaceInfo/WorkspaceInfo";
import Chart from "../../components/CompareWorkspace/Chart/Chart";

import "./CompareWorkspace.css";

function CompareWorkspace () {
    const [charts, setCharts] = useState([]);

    const addChart = () => {
        setCharts([...charts, { id: crypto.randomUUID() }]);
    }

    const onDeleteChart = (id) => {
        setCharts(charts.filter(item => item.id !== id));
    }

    return (
        <div>
            <NavigationBar />
            <div className="compare-workspace-container">
                <div className="cw-left">
                    <SelectedSongs />
                    <div className="ac-button-container">
                        <button className="primary-button add-chart-button" onClick={addChart}>Add Chart</button>
                    </div>
                    <WorkspaceInfo />
                    <div className="cw-zoom-container">
                        <hr />
                    </div>
                </div>
                <div className="cw-right">
                    {charts.map((item, index) => (
                        <Chart key={item.id} id={item.id} onDeleteChart={onDeleteChart} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CompareWorkspace;