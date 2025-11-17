import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";

const dialogButtonCode = `<button class="dialog-trigger" aria-haspopup="dialog" aria-controls="example-dialog">
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

function DialogCodeMode() {
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
        </div>
    );
}

export default DialogCodeMode;
