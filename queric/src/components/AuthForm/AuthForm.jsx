import { supabase } from "../../supabaseClient";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./AuthForm.css";

function SignInAuthForm () {
    const [authType, setAuthType] = useState("google")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");

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
            {authType == "google" && 
                <div className="google-container">
                    <button className="primary-button auth-button" onClick={signInWithGoogle}>Sign In with Google</button>
                    <div className="auth-secondary-container">
                        <button 
                        className="borderless-button" 
                        onClick={() => setAuthType("manual-sign-in")}
                        >Sign in manually</button>
                        <h3 className="borderless-button">|</h3>
                        <button 
                            className="borderless-button" 
                            onClick={() => setAuthType("sign-up")}
                            >Sign up</button>
                        </div>   
                </div>
            }

            {authType == "manual-sign-in" && 
                <div className="manual-sign-in-container">
                    <input placeholder="email" onChange={ e => setEmail(e.target.value) } />
                    <input placeholder="password" type="password" onChange={ e => setPassword(e.target.value) } />
                    <button className="primary-button" onClick={signIn}>Sign In</button>
                    <div className="auth-secondary-container">
                        <button className="borderless-button">Forgot Password</button>
                        <h3 className="borderless-button">|</h3>
                        <button className="borderless-button" onClick={() => setAuthType("sign-up")}>New here? Sign up</button>
                    </div>
                    
                </div>
            }

            {authType == "sign-up" && 
                <div className="sign-up-container">
                    <input placeholder="username" onChange={ e => setUsername(e.target.value) } />
                    <input placeholder="display name" onChange={ e => setDisplayName(e.target.value) } />
                    <input placeholder="email" onChange={ e => setEmail(e.target.value) } />
                    <input placeholder="password" type="password" onChange={ e => setPassword(e.target.value) } />
                    <input placeholder="confirm password" type="password" onChange={ e => setConfirmPassword(e.target.value) } />
                    <div className="su-footer-container">
                        <div className="suaf-buttons">
                            <button className="primary-button" onClick={signUp}>Sign Up</button>
                            <button className="secondary-button" onClick={signInWithGoogle}>Sign in with Google</button>
                        </div>
                        <button className="borderless-button" onClick={() => {setAuthType("google")}}>Back to sign in</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default SignInAuthForm;