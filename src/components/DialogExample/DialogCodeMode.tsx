import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const dialogButtonCode = `
<button className="dialog-trigger" aria-haspopup="dialog" aria-controls="example-dialog">
  This triggers a dialog!
</button>`;

function DialogCodeMode() {
    return (
        <div className="visual-mode-content">
            <p>Here's the code behind the working button:</p>
            <SyntaxHighlighter language="html" style={oneDark}>
                {dialogButtonCode}
            </SyntaxHighlighter>

            <p>And here's the the code behind the dialog element:</p>
            <pre>
                <code>
                      <dialog id="example-dialog" className="" aria-labelledby="dialog-title" aria-describedby="dialog-desc">

                                  <h1 className="">Magic is happening here!</h1>
                                  <button className="btn-close-dialog" aria-label="Close dialog" type="button">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none">
                                          <path
                                              d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z"
                                              fill="currentColor"></path>
                                      </svg>
                                      <span className="screen-reader-text">Close</span>
                                  </button>
                          <p>Just a little dialog with a lot of accessible power!</p>
                      </dialog>
                  </code>
            </pre>

        </div>
    );
}

export default DialogCodeMode;