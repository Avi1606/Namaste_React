
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo"
                     src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"/>
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