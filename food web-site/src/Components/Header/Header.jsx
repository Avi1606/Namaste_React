
import './Header.css'
import {LOGO} from "../Utils/Constants.jsx";
import {useState} from "react";



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
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
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