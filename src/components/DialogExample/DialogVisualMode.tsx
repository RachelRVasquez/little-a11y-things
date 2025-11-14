function DialogVisualMode(){
    return(
        <div className="visual-mode-content">
            <p>Here's a fully functioning button element that triggers a bonafide dialog! Give it a go.</p>
            <p>If you want to see the code under the hood, go ahead and click that "Code Mode" tab.</p>

            <div className="demo-area">
                <button className="dialog-trigger" aria-haspopup="dialog" aria-controls="example-dialog">
                    Click for magic
                </button>
            </div>
        </div>
    );
}

export default DialogVisualMode;