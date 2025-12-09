import { useEffect, useState } from "react";
import matter from "gray-matter";
import { marked } from "marked";

const contentFiles = import.meta.glob("/src/content/**/*.md", { as: "raw" });

export function useMarkdown(path: string) {
    const [html, setHtml] = useState<string>("");

    useEffect(() => {
        (async () => {
            const importer = contentFiles[path];
            if (!importer) {
                console.warn(`Markdown not found: ${path}`);
                setHtml("");
                return;
            }

            const raw = await importer();
            const { content } = matter(raw);
            const parsed = marked.parse(content);
            setHtml(parsed);
        })();
    }, [path]);

    return html;
}
