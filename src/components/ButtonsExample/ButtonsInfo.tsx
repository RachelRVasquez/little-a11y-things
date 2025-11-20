import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";

function ButtonsInfo() {

    const btnResetStyle = `@mixin remove-btn-defaults() {
  padding: 0; // can remove or set as a parameter
  background: none;
  border: none;
  border-radius: 0;
}`;

    const srOnlyStyle = `@mixin screen-reader-only {
  border: 0;
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal !important;
}`;

    return (
        <>
            <section>
                <h3>
                    What is it?
                </h3>
                <p>A <code>&lt;button&gt;</code> element is used for triggering actions.</p>
                <p className="tip no-margin"><b>Tip:</b> A link is for navigation. If it takes you somewhere, it's a
                    link. If it
                    triggers an action, it should be a button.</p>
            </section>
            <section>
                <h3>
                    When to use it?
                </h3>
                <ul>
                    <li>Dialogs</li>
                    <li>Popovers</li>
                    <li>Expanding/collapsing mobile menus</li>
                    <li>Changing between light and dark theme (like my "Toggle theme" button on this site)</li>
                </ul>
            </section>
            <section>
                <h3>
                    Required attributes & keyboard behavior
                </h3>
                <table>
                    <thead>
                    <tr>
                        <th>ARIA Attribute</th>
                        <th>What it does</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><code>aria-haspopup</code></td>
                        <td>Used to link the button to the popup it triggers.<br/>
                            Accepted values: menu, listbox, tree, grid, dialog, true
                        </td>
                    </tr>
                    <tr>
                        <td><code>aria-controls</code></td>
                        <td>Used to link the button to what it controls, whether that’d be a dialog, a mobile menu, a
                            popover etc.
                        </td>
                    </tr>
                    <tr>
                        <td><code>aria-pressed</code></td>
                        <td>Used for toggle buttons. For example, a play/pause button.</td>
                    </tr>
                    <tr>
                        <td><code>aria-expanded</code></td>
                        <td>Used to indicate whether a child branch is visible. For example, a button that
                            expands and collapses a mobile menu.
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p className="tip"><b>Tip:</b> While it’s not required to set the <code>type</code> attribute on a
                    button,
                    doing so prevents unintended behavior. For example, if you have a button inside of a
                    form that is not meant to be a submit button, it may trigger form submission anyway if
                    you don’t specify the type as “button.”</p>

                <h4>Keyboard expectations</h4>
                <ul>
                    <li>There should always be a visible <code>:focus</code> or <code>:focus-within</code> style on
                        buttons.
                        It can be the same as your <code>:hover</code> style, an outline, or something different.
                    </li>
                </ul>
            </section>
            <section>
                <h3>
                    Accessibility gotchas
                </h3>
                <ul>
                    <li>If your button does not contain text (an icon only button), then provide alternative text
                        for screen readers to read out loud.
                    </li>
                    <li>Prevent screen readers from trying to read out
                        SVG icons with aria-hidden=”true”. I’ve given examples in the demo area further up the page.
                    </li>
                </ul>
                <p className="tip"><b>Tip:</b> If styling is what makes you hesitate to use a button rather than a link,
                    you can
                    style buttons to look like links. I like to create a Sass mixin or a class to “reset” buttons, and
                    then add my
                    styles after. Here’s an example:</p>

                <SyntaxHighlighter language="sass" style={oneDark}>
                    {btnResetStyle}
                </SyntaxHighlighter>
                <p className="tip"><b>Tip:</b> If you're looking for CSS for
                    text you only want visible to screen readers, here is a Sass mixin example:</p>

                <SyntaxHighlighter language="sass" style={oneDark}>
                    {srOnlyStyle}
                </SyntaxHighlighter>
            </section>
            <section>
                <h3>Further reading:</h3>
                <ul>
                    <li>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MDN: The button element
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.a11y-collective.com/blog/button-vs-link/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The A11y Collective: A web developer's guide to buttons vs links
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://karlgroves.com/links-are-not-buttons-neither-are-divs-and-spans/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Karl Groves: Links are not buttons. Neither are divs or spans.
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://theadminbar.com/accessibility-weekly/divs-are-not-buttons/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The Admin Bar: Divs are not buttons.
                        </a>
                    </li>
                </ul>

            </section>
        </>
    );
}

export default ButtonsInfo;
