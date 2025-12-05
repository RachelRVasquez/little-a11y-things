import { useState, useEffect } from "react";
import matter from "gray-matter";
import { marked } from "marked";

import Tabs from "../components/Tabs/Tabs";
import ButtonsVisualMode from "../components/ButtonsExample/ButtonsVisualMode";
import ButtonsCodeMode from "../components/ButtonsExample/ButtonsCodeMode";
// import ButtonsInfo from "../components/ButtonsExample/ButtonsInfo";

const contentFiles = import.meta.glob("/src/content/*.md", { as: "raw" });

export default function ButtonsPage() {
    /* Hooks -------- */
    const [mdHTML, setMdHTML] = useState<string>("");

    useEffect(() => {
        (async () => {
            const fileImporter = contentFiles["/src/content/button.md"];
            if (!fileImporter) return;

            const raw = await fileImporter();
            const { content } = matter(raw);
            const html = marked.parse(content);

            setMdHTML(html);
        })();
    }, []);

    return(
        <section id="dialog-page">
            <h2>Buttons</h2>
            <Tabs
                tabs={[
                    { label: "Visual Mode", content: <ButtonsVisualMode /> },
                    { label: "Code Mode", content: <ButtonsCodeMode /> },
                ]}
            />
            <div className="component-desc">
                <div dangerouslySetInnerHTML={{ __html: mdHTML }} />
            </div>
        </section>
    );
}