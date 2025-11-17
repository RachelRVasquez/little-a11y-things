import { useRef } from "react";

function DialogVisualMode() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const closeBtnRef = useRef<HTMLButtonElement>(null);

    const openExampleDialog = () => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        dialog.showModal();
        dialog.setAttribute("aria-modal", "true");

        document.body.classList.add("dialog-open");

        // Move focus to close button
        requestAnimationFrame(() => {
            closeBtnRef.current?.focus();
        });
    };

    const closeExampleDialog = () => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        dialog.close();
        dialog.setAttribute("aria-modal", "false");

        document.body.classList.remove("dialog-open");

        // Return focus to the trigger button
        requestAnimationFrame(() => {
            triggerRef.current?.focus();
        });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
        //close dialog on escape key
        if (e.key === "Escape") {
            e.preventDefault();
            closeDialog();
        }
    };

    return (
        <div className="visual-mode-content">
            <p>Here’s a fully functioning button that triggers a modal dialog.
                Switch to “Code Mode” to see the code under the hood..</p>

            <div className="demo-area">
                <button
                    className="dialog-trigger"
                    aria-haspopup="dialog"
                    aria-controls="example-dialog"
                    onClick={openExampleDialog}
                    ref={triggerRef}
                >
                    Click for magic
                </button>
                <dialog id="example-dialog"
                        aria-modal="false"
                        aria-labelledby="dialog-title"
                        onKeyDown={handleKeyDown}
                        aria-describedby="dialog-content"
                        ref={dialogRef}
                        autoFocus>
                    <div className="dialog-top">
                        <h1 id="dialog-title">An example of a dialog!</h1>
                        <button type="button"
                                aria-label="Close dialog"
                                id="btn-dialog-close"
                                onClick={closeExampleDialog}
                                ref={closeBtnRef}
                        >
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                                          fill="#1C274C"></path>
                                </g>
                            </svg>
                            <span className="screen-reader-only">Close</span>
                        </button>
                    </div>
                    <p id="dialog-content">This example dialog has all the necessary attributes for developers to use.</p>
                    <p>You can use the <code>aria-labelledby</code> and <code>aria-describedby</code> attributes to help
                        tell screen readers what this dialog is for.</p>
                    <p>You'll also notice this dialog example has blocked user interaction with the page behind by
                    using a combination of <code>showModal()</code> and a class on the body element.</p>
                </dialog>
            </div>
        </div>
    );
}

export default DialogVisualMode;
