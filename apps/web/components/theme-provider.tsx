"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_KEY = "prepsphere_theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  // Helper to apply theme class
  const applyTheme = (targetTheme: Theme) => {
    const root = document.documentElement;
    const isDark =
      targetTheme === "dark" ||
      (targetTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.remove("light", "dark");
    if (isDark) {
      root.classList.add("dark");
      setResolvedTheme("dark");
    } else {
      root.classList.add("light");
      setResolvedTheme("light");
    }
  };

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    const initialTheme: Theme = saved || "system";
    setThemeState(initialTheme);
    applyTheme(initialTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const current = (localStorage.getItem(THEME_KEY) as Theme) || "system";
      if (current === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme: mounted ? resolvedTheme : "dark",
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
