function DialogInfo() {
    return (
        <>
            <section>
                <hr/>
                <h3>
                    What is it?
                </h3>
                <p>A <code>&lt;dialog&gt;</code> element creates a modal or non-modal-dialog. You may be more
                    familiar with it as a "popup." It provides built-in methods
                    (<code>show(), showModal()</code> ) to control visibility, automatic handling of certain attributes
                    out of the box,
                    and even a backdrop that can be styled with CSS (for modal-dialogs).
                </p>
            </section>
            <section>
                <h3>
                    When to use it?
                </h3>
                <p>A "modal" and a "dialog" are not the same thing. Surprised? Same! Blew my mind when I learned about
                    it.</p>
                <p>The <a href="https://www.a11y-collective.com/blog/modal-vs-dialog/" rel="noopener noreferrer"
                          target="_blank">A11y Collection</a> has a nice in-depth review of the differences, but
                    here's the gist of it:</p>
                <h4>Modal-dialogs</h4>
                <p>Modal-dialogs block interaction with the rest of the page.
                    A translucent full-screen background color will usually appear behind the modal-dialog to emphasize
                    this.
                    This is why we should only use this dialog type
                    for informing people of critical information and/or confirming critical actions.</p>

                <p>Here are a few examples of when to use a modal-dialog.</p>
                <ul>
                    <li>Confirming destructive actions like before deleting data permanently.</li>
                    <li>Collecting required payment details for checkout.</li>
                    <li>For critical warnings and alerts.</li>
                    <li>To acknowledge or agree to legal terms before proceeding.</li>
                    <li>A login form to view content only accessible to those who are logged in.</li>
                </ul>
                <p className="tip"><b>Tip:</b> Use the <code>showModal()</code> function so that the dialog displays
                    on the top layer along with a <code>::backdrop</code> pseudo-element.</p>
                <h4>Non-modal-dialog</h4>
                <p>Non-modal-dialogs provide optional info or options without preventing interaction with the content
                    behind it.
                    Here are a few examples of when to use a non-modal-dialog:</p>
                <ul>
                    <li>Newsletter signups.</li>
                    <li>Help text or tool tips.</li>
                    <li>Optional settings and preferences.</li>
                    <li>To advertise a product or sale.</li>
                </ul>
                <p className="tip"><b>Tip:</b> Use the <code>show()</code> function to allow interaction outside
                    of the dialog. Does not apply the <code>::backdrop</code> pseudo-element.</p>
            </section>
            <section>
                <h3>Required attributes & keyboard behavior</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>What it does</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><code>aria-haspopup</code> on the button (dialog trigger).</td>
                        <td>Set to “dialog” on the button that triggers the dialog.</td>
                    </tr>
                    <tr>
                        <td><code>aria-controls</code> on the button (dialog trigger).</td>
                        <td>Use it with the ID that is on your dialog. It’s how we “connect” our button to the dialog it
                            triggers.
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
                            This links the dialog to its descriptive content, which is then read aloud by assistive
                            technologies when the dialog appears.
                        </td>
                    </tr>
                    <tr>
                        <td><code>autofocus</code> within the dialog's content.</td>
                        <td>Should be added to the first interactive element.
                        </td>
                    </tr>
                    </tbody>
                </table>

                <p className="tip"><b>Tip:</b> The <code>aria-modal</code> attribute is automatically handled out of the
                    box for modal-dialogs.
                    This attribute informs assistive technology that the content underneath the dialog is not
                    interactive.</p>
                <p className="tip"><b>Tip:</b> The <code>open</code> attribute is also handled out of the box, but for
                    non-modal dialogs only.</p>

                <h4>Keyboard expectations</h4>

                <p>Keyboard behavior differs between the two kinds of dialogs. Here is how each differ and where both
                    dialogs should have the same keyboard behavior:</p>
                <ul>
                    <li><b>Modal-dialog:</b> Maintains keyboard focus. None of the content behind the dialog is
                        focusable unless the dialog is closed.
                    </li>
                    <li><b>Modal-dialog:</b> When the dialog is opened, the <code>autofocus</code> attribute should be
                        added to the element we expect people to interact with first.
                    </li>
                    <li><b>Non-modal dialog:</b> Does not maintain keyboard focus. We can focus between the content
                        behind it and the dialog.
                    </li>
                    <li><b>Non-modal dialog:</b> Once the dialog loses focus, it should automatically close.</li>
                    <li><b>Non-modal dialog:</b> The Esc key should close the dialog. This might be appropriate for
                        modal-dialogs too. Consult a UX expert.
                    </li>
                    <li><b>Both:</b> When the dialog opens, focus moves into it.</li>
                    <li><b>Both:</b> When the dialog is closed, focus returns to the button that triggered the
                        dialog.<br/>
                        If there isn't an element that serves as
                        a trigger, then focus should return to the previously focused element from before the dialog was
                        opened.
                    </li>
                </ul>

                <p className="tip">Tip: Handling Esc key functionality is handled out of the box for non-modal
                    dialogs.</p>
            </section>
            <section>
                <h3>Accessibility gotchas</h3>
                <ul>
                    <li>Don’t trap focus if using a non-modal dialog.</li>
                    <li>Make sure the first interactive element is focusable.
                        This is usually the close button or if there’s a form in the dialog, the first field in the
                        form.
                    </li>
                    <li>Don’t disable scrolling unless it’s a modal-dialog.</li>
                    <li>Don’t use <code>role="dialog"</code> on a <code>&lt;dialog&gt;</code> element. It’s redundant.
                        Only use if for some reason you’re not using the dialog element.
                    </li>
                    <li>Do not use <code>tab-index</code> on the dialog element. The dialog itself is not an interactive
                        element, and does not receive focus.
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
                            WAI-ARIA: modal-dialog example
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
