import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";

import "./Home.css";

function Home () {
    return (
        <div className="home">
            <NavigationBar />
            
            <div className="home-top-container">
                <div className="home-top-left-container">
                    <h1>Find lyrics, analyze language, discover patterns</h1>
                    <h3>Search by song, album, or artist. Enter multiple queries separated by commas (e.g. 'Adele, 21, Someone Like You').</h3>
                    <h3>Global Search</h3>
                    <SearchBar />
                </div>
                <div className="home-top-right-container">
                    <div className="quick-actions-container">
                        <button>Upload Lyrics CSV</button>
                        <button>Open Compare Workspace</button>
                        <button>Explore Presets</button>
                    </div>
                    <div className="recent-popular-searches-container">
                        <h3>Recent Popular Searches</h3>
                    </div>
                </div>
            </div>
            <div className="home-bttm-container">
                <div className="home-bttm-left-container">
                    <div className="curated-presets-container">
                        <h2>Curated Presets</h2>
                        <h3>Ready-made analyses and collections to get started quickly.</h3>
                        presets
                    </div>
                    <div className="recent-analyses-container">
                        <h2>Recent Analyses & Demos</h2>
                        <h3>Sample analysis previews showcasing Queric insights.</h3>
                        demos
                    </div>
                </div>
                <div className="home-bttm-right-container">
                    <h2>What Queric Does</h2>
                    <h3>Powerful linguistic analyses to help researchers, artists, and producers understand lyrics at scale.</h3>
                    <p>Desc</p>
                    <button>Explore Analyses</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;