import './Header.css'
import {LOGO} from "../Utils/Constants.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";


const Header = () => {

    const[loginButton, setLoginButton] = useState("Login");

    if (loginButton === "Login") {}
    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src={LOGO} />
            </div>
            <div className={"nav-bar"}>
                <div className={"nav-bar-list"}>
                    <ul>
                        <li><Link to = "/">Home</Link></li>
                        <li>Contacts Us</li>
                        <li><Link to = "/about">About</Link></li>
                        <li>Cart</li>
                        <button className = "login-button"
                                onClick ={() =>
                                    loginButton ==="Login" ?
                                        setLoginButton("Logout") :
                                        setLoginButton("Login") }
                        >
                            {loginButton}
                        </button>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Header;