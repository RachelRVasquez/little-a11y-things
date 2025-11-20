import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const dialogButtonCode = `// Normal button
<button type="button" class="example-btn normal">Normal button</button>

// Button with an SVG icon on the left, uses the aria-hidden attribute set to "true"
<button type="button" class="example-btn icon-text-left">
    <span aria-hidden="true"><svg>...</svg></span> Left icon button
</button>

// Button with an SVG icon on the right, uses the aria-hidden attribute set to "true"
<button type="button" class="example-btn icon-text-right">
    Right icon button <span aria-hidden="true"><svg>...</svg></span>
</button>

// An SVG icon button without visible text. Includes screen reader only text.
<button type="button" class="example-btn icon-only">
    <span aria-hidden="true"><svg>...</svg></span>
    <span class="screen-reader-only">An icon only button</span>
</button>

// Buttons can look like links with the right CSS.
<button type="button" class="example-btn link-style">Link styled button</button>

// An icon only button, even if it looks like a link, should still use aria-hidden set to "true".
<button type="button" class="example-btn link-style-combo">
    Link styled icon combo
    <span aria-hidden="true"><svg>...</svg></span>
</button>`;

function DialogCodeMode() {
    return (
        <div className="visual-mode-content">
            <p>Here's the code behind the working buttons:</p>
            <SyntaxHighlighter language="html" style={oneDark}>
                {dialogButtonCode}
            </SyntaxHighlighter>
            <p className="tip no-margin">Note that icons can be implemented in different ways. While my examples use
            SVGs, some people use icon fonts or HTML symbol entities. It's good practice to ensure screen readers
            don't attempt to read icons with the <code>aria-hidden</code> attribute.</p>
        </div>
    );
}

export default DialogCodeMode;
