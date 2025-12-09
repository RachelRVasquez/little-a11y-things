import {useState, useEffect} from "react";
import matter from "gray-matter";
import {marked} from "marked";

import Tabs from "../components/Tabs/Tabs";
import ButtonsVisualMode from "../components/ButtonsExample/ButtonsVisualMode";
import ButtonsCodeMode from "../components/ButtonsExample/ButtonsCodeMode";
// import ButtonsInfo from "../components/ButtonsExample/ButtonsInfo";

const contentFiles = import.meta.glob("/src/content/buttons/*.md", {as: "raw"});

export default function ButtonsPage() {
    /* Hooks -------- */
    const [mdHTML, setMdHTML] = useState<string>("");
    //@todo: I want a re-usable component/function? to get md file and return content, do I need to pass file path every time?
    useEffect(() => {
        (async () => {
            const fileImporter = contentFiles["/src/content/buttons/buttons-when.md"];
            if (!fileImporter) return;

            const raw = await fileImporter();
            const {content} = matter(raw);
            const html = marked.parse(content);

            setMdHTML(html);
        })();
    }, []);

    function createTip(content: string) {
        return (
            <p className="tip"><b>Tip:</b> {content}</p>
        );
    }

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
                    {/*  When to use it section */}
                    <div dangerouslySetInnerHTML={{__html: mdHTML}}/>
                    {createTip('A link is for navigation. If it takes you somewhere, it\'s a link. If it triggers an action, it should be a button.')}
                </section>
            </div>
        </section>
    );
}