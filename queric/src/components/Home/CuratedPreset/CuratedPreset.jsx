import testPhoto from "./../../../assets/test-img.jpg"
import "./CuratedPreset.css";

function CuratedPreset () {
    return (
        <div className="home-curated-preset-container">
            <img src={testPhoto}></img>
            <div className="hcp-text-container">
                <h3 className="hcp-title">Singer-Songwriter Ballads</h3>
                <h3 className="hcp-desc">Curated by Queric • 120 tracks</h3>
            </div>
            <div className="hcp-button-container">
                <button className="primary-button">Apply Preset</button>
                <button className="secondary-button">Preview</button>
            </div>
        </div>
    )
}

export default CuratedPreset;