import type {ReactElement} from "react";

export function createTip(content: string): ReactElement {
    return (
        <p className="tip"><b>Tip:</b> {content}</p>
    );
}