import { Link } from "react-router-dom";
function ButtonsInfo(){
    return(
        <>
            <section>
                <h3>
                    Button or link?
                </h3>
                <p>A link is for navigation. If it takes you somewhere, it's a link.
                   A button is for triggering actions. Actions like:
                </p>
                <ul>
                    <li>Dialogs</li>
                    <li>Popovers</li>
                    <li>Expanding/collapsing mobile menus</li>
                    <li>Changing between light and dark theme (like my "Toggle theme" button on this site)</li>
                </ul>
            </section>
            <section>
                <h3>
                    Why a button, and not a div, span, or something else?
                </h3>
                <p>A button has semantic meaning and comes with built in accessibility that other elements would
                    have to "fake."</p>
            </section>
            <section>
                <h3>
                    Ugh. But I want it to look like a link. CSS is painful.
                </h3>
                <p>Don't worry, I got you fam. Drop this CSS into a Sass mixin or in a class you can then apply to any button
                elements that you want to <i>look</i> like links. It's what I call a "button reset" where it strips
                the default styles. Makes it easier to add your own styles after without constantly writing the same
                CSS to remove the default button styles.</p>

                <pre><code>code here</code></pre>
            </section>
            <section>
                <h3>Attributes</h3>
                <p>Write about aria-pressed, expand/collapse, haspopup and also types (button, reset, submit).</p>
            </section>
            <section>
                <h3>Other tips and resources</h3>
                <p>https://css-tricks.com/explaining-the-accessible-benefits-of-using-semantic-html-elements/</p>
            </section>
        </>
    );
}

export default ButtonsInfo;