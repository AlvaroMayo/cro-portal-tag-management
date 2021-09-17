import './navigation.scss';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className="navigation">
            <span className="navigation__heading">esure</span>
            <ul>
                <Link to="/policies">
                { window.location.pathname === "/policies" ? <li  className="selected">My policies</li> : <li>My policies</li>}
                </Link>
                <Link to="/offers">
                    <li>Offers</li>
                </Link>
                <Link to="/">
                    <li>Sign out</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navigation