import { useState } from "react";
import type { ReactNode } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

interface TabItem {
    label: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
}

export default function Tabs({ tabs }: TabsProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="tabs">
            <div
                className="tablist"
                role="tablist"
                aria-label="Toggle between visual and code mode"
            >
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        index={index}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                ))}
            </div>

            {tabs.map((tab, index) => (
                <TabPanel
                    key={index}
                    index={index}
                    activeIndex={activeIndex}
                >
                    {tab.content}
                </TabPanel>
            ))}
        </div>
    );
}
