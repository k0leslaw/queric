import { supabase } from "../../supabaseClient";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./SignInAuthForm.css";

function SignInAuthForm () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const signIn = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) {
                console.error("Supabase error:", error.message);
                return;
            }
            alert("Successfully signed in.");
            navigate("/");
        } catch (err) {
            console.error("Network or config error:", err);
        }
    }

    const signInWithGoogle = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: "https://localhost:5173"
                }
            });

            if (error) {
                console.error("OAuth error:", error.message);
                return;
            }
        } catch (err) {
            console.error("Error signing in with Google:", err);
        }
    }

    return (
        <div className="sign-in-auth-form-container">
            <input placeholder="email" onChange={ e => setEmail(e.target.value) } />
            <input placeholder="password" type="password" onChange={ e => setPassword(e.target.value) } />
            <div className="siaf-footer-container">
                <div className="siaf-buttons">
                    <button className="primary-button" onClick={signIn}>Sign In</button>
                    <button onClick={signInWithGoogle}>Sign In with Google</button>
                </div>
                <Link to="/sign-up">
                    <h3 className="subtitle">New here? Sign up instead.</h3>
                </Link>
            </div>
        </div>
    )
}

export default SignInAuthForm;