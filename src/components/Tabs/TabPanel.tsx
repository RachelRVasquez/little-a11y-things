import type {ReactNode} from "react";

interface TabPanelProps {
    children: ReactNode;
    index: number;
    activeIndex: number;
}

export default function TabPanel({
    children,
    index,
    activeIndex,
}: TabPanelProps) {
    const isActive = index === activeIndex;

    return (
        <div
            role="tabpanel"
            id={`panel-${index}`}
            aria-labelledby={`tab-${index}`}
            hidden={!isActive}
        >
            {children}
        </div>
    );
}
