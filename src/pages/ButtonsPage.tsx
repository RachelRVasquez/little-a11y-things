import Tabs from "../components/Tabs/Tabs";
import ButtonsVisualMode from "../components/ButtonsExample/ButtonsVisualMode";
import ButtonsCodeMode from "../components/ButtonsExample/ButtonsCodeMode";

import {useMarkdown} from "../hooks/useMarkdown";
import { MarkdownRenderer } from '../components/MarkdownRenderer';

export default function ButtonsPage() {
    const buttonsContent = useMarkdown('buttons.md');

    return (
        <section id="dialog-page">
            <h2>Buttons</h2>
            <Tabs
                tabs={[
                    {label: "Visual Mode", content: <ButtonsVisualMode/>},
                    {label: "Code Mode", content: <ButtonsCodeMode/>},
                ]}
            />
            <MarkdownRenderer content={buttonsContent} />
        </section>
    );
}