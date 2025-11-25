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
                <p>The <a href="https://www.a11y-collective.com/blog/modal-vs-dialog/" rel="noopener noreferrer" target="_blank">A11y Collection</a> has a nice in-depth review of the differences, but
                    here's the gist of it:</p>
                <h4>Modal dialogs</h4>
                <p>Modal dialogs block interaction with the rest of the page.
                    Here are a few examples of when to use a modal dialog.</p>
                <ul>
                    <li>Confirming destructive actions like deleting data that's irreversible.</li>
                    <li>Collecting required payment details.</li>
                    <li>Critical warnings and alerts.</li>
                    <li>For legal terms that need to be acknowledged or agreed to.</li>
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
                <h3>Required attributes & keyboard behavior</h3>
                <table>
                    <thead>
                    <tr>
                        <th>ARIA attribute</th>
                        <th>What it does</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><code>aria-haspopup</code> on the button (dialog trigger).</td>
                        <td>Set to “true” or “dialog” on the button that triggers the dialog.</td>
                    </tr>
                    <tr>
                        <td><code>aria-controls</code> on the button (dialog trigger).</td>
                        <td>Use it with the ID that is on your dialog. It’s how we “connect” our button to the dialog it
                            triggers.
                        </td>
                    </tr>
                    <tr>
                        <td><code>aria-modal</code> on the dialog element.</td>
                        <td>Set to "true" on a modal-dialog to inform assistive technology that the content underneath
                            the dialog is not interactive.
                        </td>
                    </tr>
                    <tr>
                        <td><code>aria-labelledby</code> on the dialog element.</td>
                        <td>If your dialog has a heading or title, use its ID for this ARIA attribute.<br/>
                            This links the dialog to its visible title, which is then read aloud by assistive
                            technologies when the dialog appears.
                        </td>
                    </tr>
                    <tr>
                        <td><code>aria-describedby</code> on the dialog element.</td>
                        <td>If your dialog has a description or content, use its ID for this ARIA attribute.<br/>
                            This links the dialog to its descriptive content, , which is then read aloud by assistive
                            technologies when the dialog appears.
                        </td>
                    </tr>
                    </tbody>
                </table>

                <h4>Keyboard expectations</h4>
                <ul>
                    <li>The Esc key should close the dialog.</li>
                    <li>When the dialog opens, focus moves into it.</li>
                    <li>When the dialog is closed, focus returns to the button that triggered the dialog.</li>
                </ul>
            </section>
            <section>
                <h3>Accessibility gotchas</h3>
                <ul>
                    <li>Don’t trap focus if using a non-modal dialog.</li>
                    <li>Make sure the first interactive element is focusable.
                        This is usually the close button or if there’s a form in the dialog, the first field in the
                        form.
                    </li>
                    <li>Don’t disable scrolling unless it’s a modal dialog.</li>
                    <li>Don’t use <code>role="dialog"</code> on a <code>&lt;dialog&gt;</code> element. It’s redundant.
                        Only use if for some reason you’re not using the dialog element.
                    </li>
                    <li>Do not use <code>tab-index</code> on the dialog element. The dialog itself is not an interactive element, and
                        does not receive focus.
                    </li>
                    <li>Trying to place something that isn't already inside the <code>&lt;dialog&gt;</code> element on
                        top using CSS <code>z-index</code> will not work.
                    </li>
                </ul>
            </section>
            <section>
                <h3>Further reading:</h3>
                <ul>
                    <li>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MDN: Dialog element
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WAI-ARIA: Modal dialog example
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://dev.to/iam_timsmith/dialogs-vs-modals-is-there-a-difference-210k"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            DEV Community: Dialogs vs Modals — Is there a difference?
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.a11y-collective.com/blog/modal-vs-dialog/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            A11y Collective: When to use Modal vs Dialog components
                        </a>
                    </li>
                </ul>

            </section>
        </>
    );
}

export default DialogInfo;
