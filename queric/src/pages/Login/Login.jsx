import AuthForm from "../../components/AuthForm/AuthForm";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";

import "./Login.css";

function Login () {
    return (
        <div className="login">
            <NavigationBar />
            <div className="login-container">
                <AuthForm />
            </div>
            <Footer />
        </div>
    )
}

export default Login;