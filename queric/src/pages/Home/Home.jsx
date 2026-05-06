import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";

import "./Home.css";

function Home () {
    return (
        <div className="home">
            <NavigationBar />
            
            <div className="home-top">
                <div className="search-actions">
                    <h1>Find lyrics, analyze language, discover patterns</h1>
                    <h3>Search by song, album, or artist. Enter multiple queries separated by commas (e.g., 'Adele, 21, Someone Like You').</h3>
                    <h3>Global Search</h3>
                    <SearchBar />
                    <h3>Suggestions go here</h3>
                    <h3>Filters</h3>
                    <button>Filters go here</button>
                </div>
                <div className="home-top-right">
                    <div className="quick-actions">
                        <h3>Quick Actions</h3>
                        <button>Upload Lyrics CSV</button>
                        <button>Open Compare Workspace</button>
                        <button>Explore Presets</button>
                    </div>
                    <div className="recent-popular-searches">
                        <h3>Recent Popular Searches</h3>
                        <div className="popular-search">
                            popular search
                        </div>
                        <div className="popular-search">
                            popular search
                        </div>
                        <div className="popular-search">
                            popular search
                        </div>
                        <div className="popular-search">
                            popular search
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-bottom">
                <div className="home-bottom-left">
                    <div className="curated-presets">
                        <h2>Curated Presets</h2>
                        <h3>Ready-made analyses and collections to get started quickly.</h3>
                        <div className="presets">
                            <div className="curated-preset">
                            preset
                            </div>
                            <div className="curated-preset">
                                preset
                            </div>
                            <div className="curated-preset">
                                preset
                            </div>
                        </div>
                    </div>
                    <div className="recent-analyses-and-demos">
                        <h2>Recent Analyses & Demos</h2>
                        <h3>Sample analysis previews showcasing Queric insights.</h3>
                        <div className="presets">
                            <div className="curated-preset">
                                analysis
                            </div>
                            <div className="curated-preset">
                                analysis
                            </div>
                            <div className="curated-preset">
                                analysis
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-bottom-right">
                    <h2>What Queric Does</h2>
                    <h3>Desc</h3>
                    <button>Explore Analyses</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;