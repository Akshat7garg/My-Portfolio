"use client"

import { createContext, ReactNode, useContext, useMemo } from "react";
import useTheme from "@/hooks/useTheme";

interface ThemeContextType {
    theme: "dark" | "light",
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const { theme, toggleTheme } = useTheme();

    const value = useMemo(() => (
        { theme, toggleTheme }
    ), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (!context)
        throw new Error("useThemeContext must be used within a ThemeProvider");

    return context;
}