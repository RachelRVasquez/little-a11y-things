import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";

function DialogCodeMode() {
    const dialogButtonCode = `<button id="btn-dialog-trigger" aria-haspopup="dialog" aria-controls="example-dialog">
  Click for magic
</button>`;

    const dialogCode = `<dialog id="example-dialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-content" autoFocus>
        <h1 id="dialog-title">An example of a dialog!</h1>
        <button type="button" aria-label="Close dialog" id="btn-dialog-close">
            <svg aria-hidden="true">
                ...
            </svg>
            <span class="screen-reader-only">Close</span>
        </button>
    <p id="dialog-content">This example dialog has all the necessary attributes for developers to reference.</p>
    <p>You can use the...</p>
</dialog>`;

    const dialogJS = `const dialog = document.getElementById("example-dialog");
const triggerButton = document.getElementById("btn-dialog-trigger");
const closeButton = document.getElementById("btn-dialog-close");

// opens the dialog
triggerButton.addEventListener("click", () => {
  dialog.showModal();
  //or .show() depending on our type of dialog
});

// closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});`;

    return (
        <div className="visual-mode-content">
            <p>Here's the code behind the working button:</p>
            <SyntaxHighlighter language="html" style={oneDark}>
                {dialogButtonCode}
            </SyntaxHighlighter>

            <p>And here's the code behind the dialog element:</p>
            <SyntaxHighlighter language="html" style={oneDark}>
                {dialogCode}
            </SyntaxHighlighter>

            <p>Lastly, here is some basic Javascript to open and close the dialog:</p>
            <SyntaxHighlighter language="javascript" style={oneDark}>
                {dialogJS}
            </SyntaxHighlighter>
        </div>
    );
}

export default DialogCodeMode;
