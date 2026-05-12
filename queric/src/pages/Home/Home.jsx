import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import HomeCuratedPreset from "../../components/HomeCuratedPreset/HomeCuratedPreset";
import HomeRecentAnalyses from "../../components/HomeRecentAnalyses/HomeRecentAnalyses";
import RecentPopularSearch from "../../components/RecentPopularSearch/RecentPopularSearch";

import "./Home.css";

function Home () {
    return (
        <div className="home">
            <NavigationBar />
            <div className="home-top-container">
                <div className="home-top-left-container">
                    <h1 className="header-font">Find lyrics, analyze language, discover patterns</h1>
                    <h3 className="subtitle">Search for existing analyses by song, album, or artist. Enter multiple queries separated by commas (e.g. 'Adele, 21, Someone Like You').</h3>
                    <SearchBar />
                </div>
                <div className="home-top-right-container">
                    <div className="quick-actions-container">
                        <h3 className="header-font">Quick Actions</h3>
                        <button className="primary-button">Upload Lyrics</button>
                        <button className="secondary-button">Open Compare Workspace</button>
                        <button className="secondary-button">Explore Presets</button>
                    </div>
                    <div className="recent-popular-searches-container">
                        <h3 className="header-font">Recent Popular Searches</h3>
                        <RecentPopularSearch />
                        <RecentPopularSearch />
                        <RecentPopularSearch />
                        <RecentPopularSearch />
                    </div>
                </div>
            </div>
            <div className="home-bttm-container">
                <div className="home-bttm-left-container">
                    <div className="curated-presets-container">
                        <h2 className="header-font">Curated Presets</h2>
                        <h3 className="subtitle">Ready-made analyses and collections to get started quickly.</h3>
                        <div className="hcp-container">
                            <HomeCuratedPreset />
                            <HomeCuratedPreset />
                            <HomeCuratedPreset />
                        </div>
                    </div>
                    <div className="recent-analyses-container">
                        <h2 className="header-font">Recent Analyses & Demos</h2>
                        <h3 className="subtitle">Sample analysis previews showcasing Queric insights.</h3>
                        <div className="hra-container">
                            <HomeRecentAnalyses />
                            <HomeRecentAnalyses />
                            <HomeRecentAnalyses />
                        </div>
                    </div>
                </div>
                <div className="home-bttm-right-container">
                    <h2 className="header-font">What Queric Does</h2>
                    <h3 className="subtitle">Powerful linguistic analyses to help researchers, artists, and writers understand lyrics at scale.</h3>

                    <h3 className="topic-title">Sentiment</h3>
                    <h3 className="topic-desc">Detects positive, neutral, and negative tones</h3>

                    <h3 className="topic-title">Lexical Richness</h3>
                    <h3 className="topic-desc">Type-token ratio and vocabulary diversity metrics</h3>

                    <h3 className="topic-title">Rhyme Density</h3>
                    <h3 className="topic-desc">Measures rhyme occurences per line and rhyme-scheme complexity</h3>

                    <h3 className="topic-title">Topic Modeling</h3>
                    <h3 className="topic-desc">Automatically groups recurring themes and motifs using LDA-style models</h3>

                    <h3 className="topic-title">Prosody Metrics</h3>
                    <h3 className="topic-desc">Estimates stress patterns and syllable timing from lyric structure</h3>

                    <h3 className="topic-title">Readability</h3>
                    <h3 className="topic-desc">Flesch scores and readability ranges for lyric complexity</h3>

                    <h3 className="topic-title">Repetition Patterns</h3>
                    <h3 className="topic-desc">Identifies chorus repeats, refrains, and motif repetitions</h3>

                    <h3 className="topic-title">Unique Word Ratio</h3>
                    <h3 className="topic-desc">Proportion of unique tokens to total tokens</h3>

                    <button className="primary-button">Explore Analyses</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;