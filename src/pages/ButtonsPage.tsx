import Tabs from "../components/Tabs/Tabs";
import ButtonsVisualMode from "../components/ButtonsExample/ButtonsVisualMode";
import ButtonsCodeMode from "../components/ButtonsExample/ButtonsCodeMode";
// import ButtonsInfo from "../components/ButtonsExample/ButtonsInfo";

import {useMarkdown} from "../hooks/useMarkdown";
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import {createTip} from "../utils/tipFormatter";

export default function ButtonsPage() {
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
                <section>
                    <h3>
                        What is it?
                    </h3>
                    <p>A <code>&lt;button&gt;</code> element is used for triggering actions.</p>
                    {createTip('A link is for navigation. If it takes you somewhere, it\'s a link. If it triggers an action, it should be a button.')}
                </section>
                <section>
                    {/*  When to use it section */}
                    <MarkdownRenderer content={whenContent} />
                </section>
                <section>
                    {/*  Attributes section */}
                    <span dangerouslySetInnerHTML={{__html: attrsContent}}/>
                </section>
                <section>
                    {/*  Gotchas section */}
                    <span dangerouslySetInnerHTML={{__html: gotchasContent}}/>
                </section>
                <section>
                    {/*  Further reading section */}
                    <span dangerouslySetInnerHTML={{__html: resourcesContent}}/>
                </section>
            </div>
        </section>
    );
}