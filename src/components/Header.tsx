import {NavLink} from "react-router-dom";
import GithubCat from "./GithubCat.tsx";

function Header() {
    return (
        <header>
            <h1>Little A11y Things</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => (isActive ? "current" : "")}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/buttons" className={({isActive}) => (isActive ? "current" : "")}>
                            Buttons
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialog" className={({isActive}) => (isActive ? "current" : "")}>
                            Dialog
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <GithubCat/>
        </header>
    );
}

export default Header;