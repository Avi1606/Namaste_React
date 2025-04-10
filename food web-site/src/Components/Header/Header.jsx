
import './Header.css'
import {LOGO} from "../Utils/Constants.jsx";

const Header = () => {
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
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Header;