import { FaFile } from "react-icons/fa6";

import "./AnalysisSettings.css";

function AnalysisSettings () {
    return (
        <div className="as-container">
            <div className="as-top-header">
                <h2 className="header-font">Tag Uploads</h2>
                <h3 className="as-cur-file subtitle"><FaFile />how_does_it_feel.txt</h3>
            </div>
            <div className="as-tags">
                <div>
                    <h3>Title</h3>
                    <input 
                        type="text"
                        placeholder="Enter track title" />
                </div>
                <div>
                    <h3>Author</h3>
                    <input 
                        type="text"
                        placeholder="Artist" />
                </div>
                <div>
                    <h3>Year</h3>
                    <input 
                        type="text"
                        placeholder="2018" />
                </div>
                <div>
                    <h3>Genre</h3>
                    <input 
                        type="text"
                        placeholder="e.g., Indie Folk" />
                </div>
            </div>
            <div className="as-presets-container">
                <div className="as-presets-header">
                    <div>
                        <h2 className="header-font">Analysis Presets</h2>
                        <h3 className="subtitle">Pick an analysis preset to apply to the upload</h3>
                    </div>
                </div>
                <div className="as-preset-options">
                    <div className="as-preset">
                        <h3>Deep Linguistic</h3>
                        <h3 className="subtitle">Full parse, semantics, entity extraction, and discourse analysis.</h3>
                    </div>
                    <div className="as-preset">
                        <h3>Quick Summary</h3>
                        <h3 className="subtitle">Extraction of key themes and a brief synopsis.</h3>
                    </div>
                    <div className="as-preset">
                        <h3>Rhyme-Focused</h3>
                        <h3 className="subtitle">Rhyme density, rhyme schemes, and pattern detection.</h3>
                    </div>
                    <div className="as-preset">
                        <h3>Meter/Prosody</h3>
                        <h3 className="subtitle">Stress pattern analysis and prosodic meter suggestions.</h3>
                    </div>
                </div>
                <div className="as-buttons">
                    <button className="primary-button">Start Upload</button>
                    <button className="secondary-button">Clear</button>
                </div>
            </div>
        </div>
    )
}

export default AnalysisSettings;