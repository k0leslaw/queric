import { SupabaseClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import SelectedSongs from "../../components/CompareWorkspace/SelectedSongs/SelectedSongs";
import WorkspaceInfo from "../../components/CompareWorkspace/WorkspaceInfo/WorkspaceInfo";
import Chart from "../../components/CompareWorkspace/Chart/Chart";

import "./CompareWorkspace.css";
import { supabase } from "../../supabaseClient";

function CompareWorkspace () {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [charts, setCharts] = useState([]);
    const [lyrics, setLyrics] = useState([]);

    const addChart = () => {
        setCharts([...charts, { id: crypto.randomUUID() }]);
    }

    const onDeleteChart = (id) => {
        setCharts(charts.filter(item => item.id !== id));
    }

    const AddLyrics = async (artist, title) => {
        try {
            const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
            if (!response.ok) throw new Error("Cannot fetch lyrics");
            const result = await response.json();
            setLyrics((prevLyrics) => [...prevLyrics, result]);
            console.log(result);
        } catch (err) {
            console.error("Error fetching lyrics:", err);
        }
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
                    <SelectedSongs AddLyrics={AddLyrics} />
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