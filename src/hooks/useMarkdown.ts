import { useEffect, useState } from "react";
import matter from "gray-matter";
import { marked } from "marked";

const contentFiles = import.meta.glob<string>("/src/content/*.md", { query: "?raw", import: "default" });

// Custom extension for tips
const tipExtension = {
    name: 'tip',
    level: 'block' as const,
    start(src: string) {
        return src.match(/^:::tip/)?.index;
    },
    tokenizer(src: string) {
        const rule = /^:::tip\n([\s\S]*?)\n:::/;
        const match = rule.exec(src);
        if (match) {
            return {
                type: 'tip',
                raw: match[0],
                text: match[1].trim()
            };
        }
    },
    renderer(token: any) {
        return `<div class="tip" role="note" aria-label="Tip">${marked.parse('<b>Tip:</b> ' + token.text)}</div>`;
    }
};

// Override the default code renderer to prepare for SyntaxHighlighter
const renderer = {
    code(token: any) {
        const code = token.text;
        const lang = token.lang || 'text';
        // Escape HTML entities in code
        const escapedCode = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');

        return `<pre data-lang="${lang}" class="syntax-highlight"><code>${escapedCode}</code></pre>`;
    }
};

// Configure marked (this runs once when the module loads)
marked.use({
    extensions: [tipExtension],
    renderer
});

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
            let parsed = marked.parse(content) as string;

            // Wrap content in sections at each H3
            parsed = parsed.replace(
                /(<h3[^>]*>.*?<\/h3>)([\s\S]*?)(?=<h3|$)/g,
                '<section>$1$2</section>'
            );

            setHtml(parsed);
        })();
    }, [fileName]);

    return html;
}