import {Link} from "react-router-dom";

function DialogInfo() {
    return (
        <>
            <section>
                <hr/>
                <h3>
                    What is it?
                </h3>
                <p>A <code>&lt;dialog&gt;</code> element creates a modal or non-modal dialog. You may be more
                    familiar with it as a "popup." It provides built-in methods
                    (<code>show(), showModal()</code> ) to control visibility.

                    It also includes a backdrop you can style with CSS.
                </p>
            </section>
            <section>
                <h3>
                    When to use it?
                </h3>
                <p>A "modal" and a "dialog" are not the same thing. Surprised? Same bro, blew my mine when I learned
                    this.</p>
                <p>The <Link to={{
                    pathname: "https://www.a11y-collective.com/blog/modal-vs-dialog/"
                }}
                             target="_blank">A11y Collection</Link> has a nice in-depth review of the differences, but
                    here's the gist of it:</p>
                <h4>Modal dialogs</h4>
                <p>Modal dialogs block interaction with the rest of the page.
                    Here are a few examples of when to use a modal dialog.</p>
                <ul>
                    <li>Confirming destructive actions like before deleting data that's irreversible.</li>
                    <li>Collecting required payment details.</li>
                    <li>Critical warnings and alerts.</li>
                    <li>For legal notifications that need to be acknowledged or agreed to.</li>
                </ul>
                <p className="tip"><b>Tip:</b> Use the <code>showModal()</code> function so that the dialog displays
                on the top layer along with a <code>::backdrop</code> pseudo-element.</p>
                <h4>Non-modal dialog</h4>
                <p>Non-modal dialogs provide info or options without preventing interaction with the content behind it.
                    Here are a few examples of when to use a non-modal dialog:</p>
                <ul>
                    <li>Newsletter signups!</li>
                    <li>Help text or tool tips.</li>
                    <li>Optional settings and preferences.</li>
                </ul>
                <p className="tip"><b>Tip:</b> Use the <code>show()</code> function to allow interaction outside
                of the dialog. Does not apply the <code>::backdrop</code> pseudo-element.</p>
            </section>
            <section>
                <h3>ARIA attributes</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Element</th>
                        <th>ARIA attribute</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Button</th>
                        <td>blah</td>
                    </tr>
                    <tr>
                        <th>Dialog</th>
                        <td>blah</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h3>Tab-index and focus</h3>
                <p>Write about good practice to direct focus to the first focusable element in the dialog or the
                    heading. Then if it's closed, re-focus on the last element.</p>
                <code>JS code sample here</code>
            </section>
            <section>
                <h3>Other tips and resources</h3>
                <p>h1 okay, link to other a11y content</p>
            </section>
        </>
    );
}

export default DialogInfo;
