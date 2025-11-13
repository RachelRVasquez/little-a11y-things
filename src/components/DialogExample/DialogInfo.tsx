function DialogInfo(){
    return(
        <div className="dialog-info">
            <section>
                <h2>
                    What is it?
                </h2>
                <p>Write short description of what this code is meant to display/explain</p>
            </section>
            <section>
                <h2>
                    Modal or Dialog, does it matter?
                </h2>
                <p>Yes. Link to article about when to use either.</p>
            </section>
            <section>
                <h2>ARIA attributes</h2>
                <p>Write about aria-controls/has-popup</p>
                <code>Code sample for button and dialog with nothing in it to show attrs</code>
            </section>
            <section>
                <h2>Tab-index and focus</h2>
                <p>Write about good practice to direct focus to the first focusable element in the dialog or the
                    heading. Then if it's closed, re-focus on the last element.</p>
                <code>JS code sample here</code>
            </section>
            <section>
                <h2>Other tips and resources</h2>
                <p>h1 okay, link to other a11y content</p>
            </section>
        </div>
    );
}

export default DialogInfo;