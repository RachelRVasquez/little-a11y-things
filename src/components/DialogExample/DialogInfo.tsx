import { Link } from "react-router-dom";
function DialogInfo(){
    return(
        <>
            <section>
                <h3>
                    What is it?
                </h3>
                <p>A <Link to={{
                    pathname: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog/" }}
                     target="_blank">dialog element</Link> is the semantic way to create a modal dialog or non-modal dialog. It comes with built attributes and functions
                    that can be used to control its behavior without having to write Javascript for common sense things like opening
                    and closing the dialog.
                </p>
                <p>It even comes with a backdrop that covers all the content behind the dialog. No more fussing
                    with tricky z-index's and styles - unless you want to! The backdrop can be styled via CSS.</p>
            </section>
            <section>
                <h3>
                    What the heck is a modal dialog and a non-modal dialog?
                </h3>
                <p>A "modal" and a "dialog" are not the same thing. Surprised? Same bro, blew my mine when I learned this.</p>
                <p>The <Link to={{
                    pathname: "https://www.a11y-collective.com/blog/modal-vs-dialog/"}}
                    target="_blank">A11y Collection</Link> has a nice in-depth review of the differences, but here's the gist of it:</p>
                <h3>Modal dialogs</h3>
                <p>Modal dialogs block interaction with the rest of the page. For UX reasons, you want to take care with these. Here
                are a few examples of ways you can use a modal dialog.</p>
                <ul>
                    <li>Confirming destructive actions like when someone wants to delete data that's irreversible.</li>
                    <li>Collecting required payment details.</li>
                    <li>Critical warnings and alerts.</li>
                    <li>For legal notifications that need to be acknowledged or agreed to by the end-user.</li>
                </ul>
                <p>You want to avoid using a modal dialog that pops up as soon as a user arrives to the site for something
                like a newsletter signup.</p>
                <h3>Non-modal dialog</h3>
                <p>Non-modal dialogs provide info or options without preventing interaction with the content behind it. A few
                examples of how you'd use this in the wild:</p>
                <ul>
                    <li>Newsletter signups!</li>
                    <li>Help text or tool tips.</li>
                    <li>Optional settings and preferences.</li>
                </ul>
            </section>
            <section>
                <h3>ARIA attributes</h3>
                <p>Write about aria-controls/has-popup</p>
                <code>Code sample for button and dialog with nothing in it to show attrs</code>
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