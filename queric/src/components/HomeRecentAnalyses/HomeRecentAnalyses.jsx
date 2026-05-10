import testPhoto from "./../../assets/test-graph.png"
import "./HomeRecentAnalyses.css";

function HomeRecentAnalyses () {
    return (
        <div className="home-recent-analyses-container">
            <img src={testPhoto}></img>
            <div className="hra-text-container">
                <h3 className="hra-title">Rhyme Density — 'Abbey Road'</h3>
                <h3 className="hra-desc">Curated by user3728</h3>
            </div>
            <div className="hra-button-container">
                <button className="primary-button">Apply Preset</button>
            </div>
        </div>
    )
}

export default HomeRecentAnalyses;