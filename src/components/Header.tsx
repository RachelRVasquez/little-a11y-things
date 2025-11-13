import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.tsx";
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
            <ThemeToggle />
        </header>
    );
}

export default Header;