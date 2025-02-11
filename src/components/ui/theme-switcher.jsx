"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button
            onClick={toggleTheme}

        >
            {theme === "dark" ? (
                <Moon />
            ) : (

                <Sun className="text-button" />
            )}
        </button>
    )
}
