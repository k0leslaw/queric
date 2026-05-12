import { supabase } from "../../supabaseClient";
import { use, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./SignUpAuthForm.css";

function SignUpAuthForm () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");

    const navigate = useNavigate();

    const signUp = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        try {
            const { data, error } = await supabase.auth.signUp({ 
                email, 
                password,
                options : {
                    data: { username, displayName }
                }
            });

            if (error) {
                console.error("Supabase error:", error.message);
                return;
            }

            const userId = data.user.id;
            const { error: profileError } = await supabase.from("profiles").insert({
                id: userId,
                username,
                display_name: displayName
            });

            if (profileError) {
                console.error("Profile insert error:", profileError.message);
                return;
            }

            alert("Successfully signed up.");
        } catch (err) {
            console.error("Network or config error: ", err);
        }
    }

    const signInWithGoogle = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithGoogle({
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
        <div className="sign-up-auth-form-container">
            <input placeholder="username" onChange={ e => setUsername(e.target.value) } />
            <input placeholder="display name" onChange={ e => setDisplayName(e.target.value) } />
            <input placeholder="email" onChange={ e => setEmail(e.target.value) } />
            <input placeholder="password" type="password" onChange={ e => setPassword(e.target.value) } />
            <input placeholder="confirm password" type="password" onChange={ e => setConfirmPassword(e.target.value) } />
            <div className="suaf-footer-container">
                <div className="suaf-buttons">
                    <button className="primary-button" onClick={signUp}>Sign Up</button>
                    <button onClick={signInWithGoogle}>Sign Up with Google</button>
                </div>
                <Link to="/login">
                    <h3 className="subtitle">Have an account? Sign in instead.</h3>
                </Link>
                <Link to="/sign-up">
                    <h3 className="subtitle">Forgot Password</h3>
                </Link>
            </div>
        </div>
    )
}

export default SignUpAuthForm;