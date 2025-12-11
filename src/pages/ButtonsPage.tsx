import Tabs from "../components/Tabs/Tabs";
import ButtonsVisualMode from "../components/ButtonsExample/ButtonsVisualMode";
import ButtonsCodeMode from "../components/ButtonsExample/ButtonsCodeMode";

import {useMarkdown} from "../hooks/useMarkdown";
import { MarkdownRenderer } from '../components/MarkdownRenderer';

export default function ButtonsPage() {
    const whatContent = useMarkdown('buttons-what.md');
    const whenContent = useMarkdown('buttons-when.md');
    const attrsContent = useMarkdown('buttons-attrs.md');
    const gotchasContent = useMarkdown('buttons-gotchas.md');
    const resourcesContent = useMarkdown('buttons-resources.md');

    return (
        <section id="dialog-page">
            <h2>Buttons</h2>
            <Tabs
                tabs={[
                    {label: "Visual Mode", content: <ButtonsVisualMode/>},
                    {label: "Code Mode", content: <ButtonsCodeMode/>},
                ]}
            />
            <div className="component-desc">
                <MarkdownRenderer content={whatContent} />
                <MarkdownRenderer content={whenContent} />
                <MarkdownRenderer content={attrsContent} />
                <MarkdownRenderer content={gotchasContent} />
                <MarkdownRenderer content={resourcesContent} />
            </div>
        </section>
    );
}