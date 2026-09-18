import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        ai: ["'Plus Jakarta Sans'", "Inter", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        "ai-mono": ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        border: "var(--border)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        // Custom palette provided by user
        ocean: {
          950: "#00171F", // Midnight Navy (Deepest background)
          900: "#00263C", // Deep Oceanic Navy (Dark cards)
          800: "#003459", // Prussian Navy (Borders & elevated)
          700: "#005980", // Ocean Blue (Secondary action)
          600: "#007EA7", // Cerulean Blue (Primary action)
          500: "#0093C8", // Sky Blue (Hover & active)
          400: "#00A8E8", // Electric Cyan (Vibrant accents)
          300: "#405157", // Slate Steel
          200: "#808B8F", // Cool Slate Gray
          100: "#e0f4fc",
          50: "#f0f9fd",
          white: "#FFFFFF",
        },
        brand: {
          DEFAULT: "#007EA7",
          50: "#f0f9fd",
          100: "#e0f4fc",
          200: "#808B8F",
          300: "#405157",
          400: "#00A8E8",
          500: "#0093C8",
          600: "#007EA7",
          700: "#005980",
          800: "#003459",
          900: "#00263C",
          950: "#00171F",
        },
        sat: {
          DEFAULT: "#007EA7",
          light: "#00A8E8",
          dark: "#003459",
          50: "#f0f9fd",
          100: "#e0f4fc",
          500: "#007EA7",
          600: "#005980",
          700: "#003459",
          800: "#00263C",
          900: "#00171F",
        },
        ielts: {
          DEFAULT: "#005980",
          light: "#0093C8",
          dark: "#003459",
          50: "#f0f9fd",
          100: "#e0f4fc",
          500: "#005980",
          600: "#003459",
          700: "#00263C",
          800: "#00171F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
