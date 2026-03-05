"use client"

import { useEffect, useState } from "react"

type ThemeType = "dark" | "light";

function useTheme() {

    const getTheme = (): ThemeType => {
        if (typeof window === "undefined")
            return "dark";

        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark" || savedTheme === "light")
            return savedTheme;

        const systemPref = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        return systemPref ? "dark" : "light";
    }

    const [theme, setTheme] = useState<ThemeType>(() => getTheme());

    useEffect(() => {
        const root = document.documentElement;

        root.classList.remove("light", "dark");
        root.classList.add(theme);

        localStorage.setItem("theme", theme)
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }

    return { theme, toggleTheme };
}

export default useTheme