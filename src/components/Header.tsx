import { NavLink } from "react-router-dom";
function Header(){
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "current" : "")}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialog" className={({ isActive }) => (isActive ? "current" : "")}>
                            Dialog
                        </NavLink>
                    </li>
                    <li>
                        <span>More coming soon!</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;