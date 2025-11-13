function ThemeToggle() {
    const toggleTheme = () => {
        const root = document.documentElement;
        const current = root.getAttribute("data-theme");
        root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
    };

    return (
        <button onClick={toggleTheme} type="button" aria-label="Toggle between light and dark theme.">
            Toggle Theme
        </button>
    );
}

export default ThemeToggle;
