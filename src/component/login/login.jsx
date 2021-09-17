import LoginForm from "./login-form"
import Copyright from "./copyright"
import Info from "./info"

const Login = () => {
    return (
        <div className="container container--centered">
            <h1 className="landing__heading landing__heading--white">esure</h1>
            <div className="box box--white">
                <h1 className="landing__form-title">My account</h1>
                <div className="landing__container">
                    <LoginForm />
                    <Info />
                </div>
            </div>
            <Copyright />
        </div>
    )
}

export default Login