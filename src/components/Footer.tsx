import {Link, NavLink} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-section">
                <ul className="socials">
                    <li><Link to={{
                        pathname: "https://rrvasquez.com/blog" }}
                              target="_blank">Blog</Link></li>
                    <li><Link to={{
                        pathname: "https://x.com/RachelRVasquez" }}
                              target="_blank">X</Link></li>
                    <li><Link to={{
                            pathname: "https://www.linkedin.com/in/rachelrvasquez/" }}
                            target="_blank">Linkedin</Link></li>
                    <li><Link to={{
                        pathname: "https://github.com/RachelRVasquez" }}
                              target="_blank">Github</Link></li>
                </ul>
            </div>
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
            <div className="footer-copyright">
                <p>Lovingly crafted by RRVasquez - {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}

export default Footer;