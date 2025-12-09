import { useEffect, useState } from "react";
import matter from "gray-matter";
import { marked } from "marked";

const contentFiles = import.meta.glob("/src/content/**/*.md", { query: "?raw", import: "default" });

export function useMarkdown(fileName: string) {
    const [html, setHtml] = useState<string>("");

    useEffect(() => {
        (async () => {
            // Find the matching key based on filename
            const match = Object.keys(contentFiles).find((key) =>
                key.endsWith(fileName)
            );

            if (!match) {
                console.warn(`Markdown not found: ${fileName}`);
                setHtml("");
                return;
            }

            const importer = contentFiles[match];
            const raw = await importer();
            const { content } = matter(raw);
            const parsed = marked.parse(content);

            setHtml(parsed);
        })();
    }, [fileName]);

    return html;
}