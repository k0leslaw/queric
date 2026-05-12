import SignInAuthForm from "../../components/AuthForm/SignInAuthForm";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";

import "./Login.css";

function Login () {
    return (
        <div className="login">
            <NavigationBar />
            <div className="login-container">
                <SignInAuthForm />
            </div>
            <Footer />
        </div>
    )
}

export default Login;