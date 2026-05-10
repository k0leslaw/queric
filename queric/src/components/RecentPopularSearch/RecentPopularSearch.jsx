import "./RecentPopularSearch.css";
import TestRPS from "../../assets/test-rps.jpg"

function RecentPopularSearch () {
    return (
        <div className="recent-popular-search-container">
            <img src={TestRPS} className="rps-img"/>
            <div className="rps-text-container">
                <h3>Folk Rock Favorites</h3>
                <h4>30 tracks • Community curated</h4>
            </div>
        </div>
    )
}

export default RecentPopularSearch;