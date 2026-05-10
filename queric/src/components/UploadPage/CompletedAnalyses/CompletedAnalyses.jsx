import CompletedAnalysisItem from "../CompletedAnalysisItem/CompletedAnalysisItem";

import "./CompletedAnalyses.css";

function CompletedAnalyses () {
    return (
        <div className="completed-analyses-container">
            <div className="ca-header">
                <h2 className="header-font">Completed Analyses</h2>
                <h3 className="subtitle">Ready for review</h3>
            </div>
            <div className="ca-items-container">
                <CompletedAnalysisItem />
                <CompletedAnalysisItem />
                <CompletedAnalysisItem />
            </div>
        </div>
    )
}

export default CompletedAnalyses;