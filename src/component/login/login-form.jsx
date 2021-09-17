import { useState } from "react"
import { Link } from "react-router-dom"

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const errorMessageHandler = () => {
        setErrorMessage("Please enter a valid email address and password");
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    return (
        <div className="landing__half box--separator-right">
            <h2 className="landing__form-subtitle">Log in</h2>
            <form className="landing__form" action="submit">
                <label>Email address</label>
                <input onChange={emailHandler} type="text" value={email} />
                <label>Password</label>
                <input type="password" />
                {email ?
                    <Link to="/policies">
                        <button type="button">Log in</button>
                    </Link>
                    :
                    <div>
                        <p>{errorMessage}</p>
                        <button onClick={errorMessageHandler} type="button">Log in</button>
                    </div>
                }
            </form>
        </div>
    )
}

export default LoginForm