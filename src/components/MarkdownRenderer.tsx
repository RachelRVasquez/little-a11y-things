import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
                                                                      content,
                                                                      className = ''
                                                                  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rootsRef = useRef<Map<Element, ReactDOM.Root>>(new Map());

    useEffect(() => {
        if (!containerRef.current) return;

        // Find all code blocks that need syntax highlighting
        const codeBlocks = containerRef.current.querySelectorAll('pre.syntax-highlight');
        const newRoots = new Map<Element, ReactDOM.Root>();

        codeBlocks.forEach((block) => {
            const pre = block as HTMLElement;
            const code = pre.querySelector('code');
            const lang = pre.getAttribute('data-lang') || 'text';

            if (code) {
                // Decode HTML entities
                const textarea = document.createElement('textarea');
                textarea.innerHTML = code.innerHTML;
                const codeContent = textarea.value;

                // Create a container for the React component
                const wrapper = document.createElement('div');
                pre.parentNode?.replaceChild(wrapper, pre);

                // Render SyntaxHighlighter using your existing setup
                const root = ReactDOM.createRoot(wrapper);
                root.render(
                    <SyntaxHighlighter
                        language={lang}
                        style={oneDark}
                    >
                        {codeContent}
                    </SyntaxHighlighter>
                );

                newRoots.set(wrapper, root);
            }
        });

        // Cleanup old roots
        rootsRef.current.forEach((root, element) => {
            if (!newRoots.has(element)) {
                root.unmount();
            }
        });

        rootsRef.current = newRoots;

        // Cleanup on unmount
        return () => {
            rootsRef.current.forEach(root => root.unmount());
            rootsRef.current.clear();
        };
    }, [content]);

    return (
        <section
            ref={containerRef}
            className={className}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};