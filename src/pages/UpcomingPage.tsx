import {Link} from "react-router-dom";

export default function UpcomingPage() {
    return (
        <section id="upcoming-features">
            <h2>Upcoming features</h2>
            <p>I'd like to add more accessible elements and snippets in the future. The ones I have in
                mind are a bit more complex, so they'll take some time to add.
            I also want to improve the code quality of this React app too. Here's what I have in mind:</p>

            <ul>
                <li>New page about tabs.</li>
                <li>New page about mobile menus.</li>
                <li>New page about mega menus (multi-level navigations).</li>
                <li>Improve SVG handling in code.</li>
                <li>Improve content handling in code.</li>
            </ul>
            <hr/>
            <h2>Suggestions? Bugs? Feedback?</h2>
            <p>If you have any suggestions or have found bugs, feel free to open an issue on
                <Link to={{
                    pathname: "https://github.com/RachelRVasquez/little-a11y-things"
                }} target="_blank"> my Github repository</Link>. And
            if this tool has helped you in any way, <Link to={{
                    pathname: "mailto:rachel@rrvasquez.com"
                }} target="_blank">I'd love to hear about it</Link>.</p>
        </section>
    );
}
