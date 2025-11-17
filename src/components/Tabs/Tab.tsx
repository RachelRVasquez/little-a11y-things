interface TabProps {
    label: string;
    index: number;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

export default function Tab({
    label,
    index,
    activeIndex,
    setActiveIndex,
}: TabProps) {

const isActive = index === activeIndex;

    return (
        <button
            role="tab"
            id={`tab-${index}`}
            aria-controls={`panel-${index}`}
            aria-selected={isActive}
            className={`tab ${isActive ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
        >
            {label}
        </button>
    );
}
