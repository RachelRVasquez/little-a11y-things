import {NavLink} from "react-router-dom";
import GithubCat from "./GithubCat.tsx";

function Header() {
    return (
        <header>
            <h1>Little A11y Things</h1>
            <nav>
                <ul className="header-nav">
                    <li>
                        <NavLink to="/" className={({isActive}) => (isActive ? "current header-link" : "header-link")}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/buttons" className={({isActive}) => (isActive ? "current header-link" : "header-link")}>
                            Buttons
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialog" className={({isActive}) => (isActive ? "current header-link" : "header-link")}>
                            Dialog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/upcoming" className={({isActive}) => (isActive ? "current header-link" : "header-link")}>
                            Upcoming features
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <GithubCat/>
        </header>
    );
}

export default Header;
