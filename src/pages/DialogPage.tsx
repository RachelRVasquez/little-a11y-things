import Tabs from "../components/Tabs/Tabs";
import DialogVisualMode from "../components/DialogExample/DialogVisualMode";
import DialogCodeMode from "../components/DialogExample/DialogCodeMode";

import {useMarkdown} from "../hooks/useMarkdown";
import { MarkdownRenderer } from '../components/MarkdownRenderer';

export default function DialogPage() {
    const dialogContent = useMarkdown('dialog.md');

    return(
        <section id="dialog-page">
            <h2>Dialogs</h2>
            <Tabs
                tabs={[
                    { label: "Visual Mode", content: <DialogVisualMode /> },
                    { label: "Code Mode", content: <DialogCodeMode /> },
                ]}
            />
            <MarkdownRenderer content={dialogContent} />
        </section>
    );
}