"use client";

import { useTheme } from "@/context/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const { mode, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Ensure it's only rendered on the client
    }, []);

    if (!mounted) return <div className="w-8 h-8"></div>; // Prevents hydration issues

    return (
        <button
            className="p-2 rounded-full transition-all bg-gray-100 dark:bg-gray-800"
            onClick={toggleTheme}
        >
            {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
