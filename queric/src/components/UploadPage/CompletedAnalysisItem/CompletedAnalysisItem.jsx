import "./CompletedAnalysisItem.css";

function CompletedAnalysisItem () {
    return (
        <div className="completed-analysis-item-container">
            <div className="cai-header">
                <div className="cai-header-left">
                    <h3 className="cai-title">How Does it Feel?</h3>
                    <h3 className="subtitle">perview • 2025 • Indie Folk</h3>
                </div>
                <h3 className="subtitle">Word count: 238</h3>
            </div>
            <div className="cai-summary">
                <div>
                   <h3>Unique Words</h3> 
                   <h3>132</h3>
                </div>
                <div>
                    <h3>Rhyme Density</h3>
                    <h3>0.34</h3>
                </div>
                <div>
                   <h3>Readability</h3>
                   <h3>8.7</h3> 
                </div>
                <div>
                    <h3>Meter Score</h3>
                    <h3>0.72</h3>
                </div>
            </div>
            <h3>Minimal lyrics that prioritize repeated refrains and steady meter, suitable for atmospheric arrangments.</h3>
            <button className="secondary-button open-details-button">Open Details</button>
        </div>
    )
}

export default CompletedAnalysisItem;