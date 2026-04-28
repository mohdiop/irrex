import { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-soft": "var(--color-primary-soft)",

        bg: "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        card: "var(--bg-card)",

        text: "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",

        border: "var(--border-default)",
      },

      fontFamily: {
        heading: ["Krona One", "sans-serif"],
        body: ["system-ui", "sans-serif"],
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },

      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
      },
    },
  },

  plugins: [],
};