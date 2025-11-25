function Footer() {
    return (
        <footer>
            <div className="footer-section">
                <div className="support">
                    <a href="https://buymeacoffee.com/rrvasquez" target="_blank" className="btn-style footer-link">
                        ☕ Buy me a coffee!
                    </a>
                </div>
                <ul className="socials">
                    <li>
                        <a href="https://rrvasquez.com/blog" target="_blank" className="footer-link">
                            Blog</a>
                    </li>
                    <li>
                        <a href="https://x.com/RachelRVasquez" target="_blank" className="footer-link">
                            X</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rachelrvasquez/" target="_blank" className="footer-link">
                            Linkedin</a>
                    </li>
                    <li>
                        <a href="https://github.com/RachelRVasquez" target="_blank" className="footer-link">
                            Github</a>
                    </li>
                </ul>
            </div>
            <div className="footer-copyright">
                <p>Lovingly crafted by <a href="https://rrvasquez.com"
                                          target="_blank" className="footer-link">RRVasquez</a> in {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}

export default Footer;
