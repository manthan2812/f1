import { useState, useEffect } from "react";
import type { Theme } from "../types";
import { STORAGE_KEYS } from "../constants";

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem(STORAGE_KEYS.THEME);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  const toggleTheme = (isDark: boolean) => {
    setTheme(isDark ? "dark" : "light");
  };

  return { theme, toggleTheme };
};
