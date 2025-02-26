import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        selection: {
          DEFAULT: "hsl(var(--selection))",
          foreground: "hsl(var(--selection-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            backgroundSize: "400% 400%",
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundSize: "400% 400%",
            backgroundPosition: "100% 50%",
          },
        },
        "slide-x": {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        "slide--x": {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-xy": "gradient-xy 5s infinite",
        "slide-x": "slide-x 100s infinite linear",
        "slide--x": "slide--x 100s infinite linear",
      },
      fontFamily: {
        patua_one: ["var(--font-patua-one)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        jetbrains_mono: ["var(--font-jetbrains-mono)", "monospace"],
        jetbrains_mono_local: ["var(--font-jetbrains-mono-local)", "monospace"],
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
