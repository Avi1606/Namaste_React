import './Header.css'
import {LOGO} from "../Utils/Constants.jsx";
import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import userContext from "../useContext/userContext.jsx";


const Header = () => {

    const[loginButton, setLoginButton] = useState("Login");

     const {loggedInUser} = useContext(userContext)

    return (
        <div className="bg-auto">
            <div className="logo">
                <img className="logo" src={LOGO} alt="Logo" />
            </div>
            <div className={"nav-bar"}>
                <div className={"nav-bar-list"}>
                    <ul>
                        <li><Link to = "/">Home</Link></li>
                        <li>Contacts Us</li>
                        <li><Link to = "/about">About</Link></li>
                        <li>Cart</li>
                        <li>{loggedInUser}</li>
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