"use client";

import { ThemeContextType } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<string>("light");

    // Handle Theme Change & Store in localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            setMode(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else {
            // Detect system preference if no stored theme exists
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setMode(systemPrefersDark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", systemPrefersDark);
        }
    }, []);

    // Toggle Dark/Light Mode
    const toggleTheme = () => {
        const newMode = mode === "dark" ? "light" : "dark";
        setMode(newMode);
        document.documentElement.classList.toggle("dark", newMode === "dark");
        localStorage.setItem("theme", newMode);
    };

    return (
        <ThemeContext.Provider value={{ mode, setMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom Hook for Theme Usage
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
