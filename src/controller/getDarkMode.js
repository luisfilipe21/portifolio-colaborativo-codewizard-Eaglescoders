import { useEffect } from "react";
import { useDarkMode } from "../model/darkMode";

export const getDarkMode = () => {
    const { setDarkMode } = useDarkMode();

    useEffect(() => {
        const root = window.document.documentElement;
        const initialState = localStorage.getItem("theme") === "dark";

        if (initialState) {
            root.classList.add("dark")
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }

    }, [])
}