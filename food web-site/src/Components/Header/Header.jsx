
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo"
                     src="https://logowik.com/content/uploads/images/serving-tray7701.logowik.com.webp"/>
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