import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import SignUpAuthForm from "../../components/AuthForm/SignUpAuthForm";

import "./SignUp.css";

function SignUp () {
    return (
        <div className="sign-up">
            <NavigationBar />
            <div className="sign-up-container">
                <SignUpAuthForm />
            </div>
            <Footer />
        </div>
    )
}

export default SignUp;