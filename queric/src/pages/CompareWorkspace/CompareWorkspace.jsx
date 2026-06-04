import { SupabaseClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import SelectedSongs from "../../components/CompareWorkspace/SelectedSongs/SelectedSongs";
import WorkspaceInfo from "../../components/CompareWorkspace/WorkspaceInfo/WorkspaceInfo";
import Chart from "../../components/CompareWorkspace/Chart/Chart";
import Groups from "../../components/CompareWorkspace/Groups/Groups";

import "./CompareWorkspace.css";
import { supabase } from "../../supabaseClient";

function CompareWorkspace () {
    const [user, setUser] = useState(null);
    const [charts, setCharts] = useState([]);
    const [songs, setSongs] = useState([]);
    const [lyrics, setLyrics] = useState([]);
    const [groups, setGroups] = useState([]);

    const addChart = () => {
        setCharts([...charts, { id: crypto.randomUUID() }]);
    }

    const onDeleteChart = (id) => {
        setCharts(charts.filter(item => item.id !== id));
    }

    const addLyrics = async (artist, title, durationMs, uniqueId) => {
        try {
            let url = `https://lrclib.net/api/search?artist_name=${encodeURIComponent(artist)}&track_name=${encodeURIComponent(title)}`;
            if (durationMs) {
                const seconds = Math.round(durationMs / 1000);
                url = `https://lrclib.net/api/get?artist_name=${encodeURIComponent(artist)}&track_name=${encodeURIComponent(title)}&duration=${seconds}`
            }
            const response = await fetch(url);
            let data = null;
            
            if (response.ok) {
                data = await response.json();
            } else if (durationMs) {
                const fallbackUrl = `https://lrclib.net/api/search?artist_name=${encodeURIComponent(artist)}&track_name=${encodeURIComponent(title)}`;
                const fallbackRes = await fetch(fallbackUrl);
                if (fallbackRes.ok) {
                    const fallbackData = await fallbackRes.json();
                    data = fallbackData.length > 0 ? fallbackData[0] : null;
                }
            }

            const resultObj = Array.isArray(data) ? data[0] : data;
            const textContent = resultObj.plainLyrics || resultObj?.syncedLyrics || "Lyrics not found.";
            
            setLyrics(prev => [...prev, { id: uniqueId, artist, title, text: textContent }]);

            // console.log(data);
        } catch (err) {
            console.error("Error fetching lyrics", err);
        }
    }

    const handleAddSong = (track) => {
        if (songs.some(song => song.id === track.trackId)) {
            alert("This track is already added to the workspace.");
            return;
        }

        const newSong = {
            id: track.trackId,
            title: track.trackName,
            artist: track.artistName,
            album: track.collectionName,
            date: track.releaseDate,
            trackCount: 1,
            coverUrl: track.artworkUrl100 ? track.artworkUrl100.replace("100x100bb.jpg", "400x400bb.jpg") : null,
            duration: track.trackTimeMillis
        }

        setSongs(prev => [...prev, newSong]);
    }

    const handleAddAlbum = async (albumItem) => {
        try {
            const res = await fetch(`https://itunes.apple.com/lookup?id=${albumItem.collectionId}&entity=song`);
            const data = await res.json();

            if (!data.results || data.results.length <= 1) return;

            const rawTracks = data.results.slice(1);

            const songsToAppend = [];
            for (const track of rawTracks) {
                if (!songs.some(song => song.id === track.trackId)) {
                    const mappedTrack = {
                        id: track.trackId,
                        title: track.trackName,
                        artist: track.artistName,
                        album: albumItem.collectionName,
                        date: albumItem.releaseDate,
                        trackCount: albumItem.trackCount,
                        coverUrl: albumItem.artworkUrl100 ? albumItem.artworkUrl100.replace("100x100bb.jpg", "400x400bb.jpg") : null,
                        duration: track.trackTimeMillis
                    }
                    songsToAppend.push(mappedTrack);
                    // addLyrics(mappedTrack.artist, mappedTrack.title, mappedTrack.duration, mappedTrack.id);
                }
            }
            if (songsToAppend.length > 0) {
                setSongs(prev => [...prev, ...songsToAppend]);
                handleAddGroup(songsToAppend[0].album, songsToAppend);
            }
        } catch (err) {
            console.error("Error fetching album tracks:", err);
        }
    }

    const clearReleases = () => {
        if (confirm("Clear all releases?")) {
            setSongs([]);
            setLyrics([]);
        }
    }

    const removeSelectedReleases = (ids) => {
        if (ids.length === 0 ) return;
        if (confirm(`Remove ${ids.length > 1 ? "all " : ""}${ids.length} selected release${ids.length !== 1 ? "s" : ""} from the workspace?`)) {
            setSongs(prev => prev.filter(song => !ids.includes(song.id)));
            setLyrics(prev => prev.filter(lyric => !ids.includes(lyric.id)));
        }
    }

    const handleAddGroup = (name, groupSongs) => {
        if (groupSongs.length === 0 ) return;
        const newGroup = {
            id: crypto.randomUUID(),
            name: name,
            songs: groupSongs
        }
        setGroups(prev => [...prev, newGroup]);
    }

    const editGroup = (id, newName) => {
        setGroups(prev => 
            prev.map(group => {
                if (group.id === id) {
                    return { ...group, name: newName }
                }
                return group;
            })
        );
    }

    /** make sure user is signed in
    if (!user) {
        alert("Please sign in before using the compare workspace.");
    } else if (!user.email_confirmed_at) {
        alert("Please confirm your email to finish setting up your account.");
    }
    */
    useEffect(() => {
        /** make sure user is signed in
        const loadUser = async () => {
            const { data, error } = supabase.auth.getUser();
            if (data?.user) setUser(data.user);
            setLoading(false);
        }

        loadUser();
        */
    }, []);

    return (
        <div>
            <NavigationBar />
            <div className="compare-workspace-container">
                <div className="cw-left">
                    <SelectedSongs 
                        selectedSongs={songs} 
                        clearReleases={clearReleases}
                        removeSelectedReleases={removeSelectedReleases}
                        onItemSelect={(item) => {
                            if (item.wrapperType === "collection") {
                                handleAddAlbum(item);
                            } else {
                                handleAddSong(item);
                            }
                        }} 
                        handleAddGroup={handleAddGroup} 
                        groups={groups} />
                    {groups.length > 0 && <Groups groups={groups} editGroup={editGroup} />}
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