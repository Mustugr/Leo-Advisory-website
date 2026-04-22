/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f4ec",
          100: "#e9e2d0",
          200: "#ccc3ad",
          300: "#9e9478",
          400: "#6d6552",
          500: "#4a443a",
          600: "#2f2a22",
          700: "#1f1c16",
          800: "#141208",
          900: "#0c0a05",
          950: "#070603",
        },
        gold: {
          50: "#faf6ea",
          100: "#f1e7c5",
          200: "#e3d396",
          300: "#d4b867",
          400: "#c29e48",
          500: "#a4823a",
          600: "#83682e",
          700: "#5f4b23",
          800: "#3e301a",
          900: "#231a10",
        },
        cream: {
          50: "#fbf6ea",
          100: "#f2ead6",
          200: "#e7dbba",
        },
        brass: {
          400: "#d4b867",
          500: "#c29e48",
          600: "#a4823a",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', '"Playfair Display"', "Georgia", "serif"],
        editorial: ['"Cormorant Garamond"', '"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-hero": [
          "clamp(3.25rem, 9vw, 9rem)",
          { lineHeight: "0.94", letterSpacing: "-0.035em" },
        ],
        "display-xl": [
          "clamp(2.75rem, 7vw, 6.5rem)",
          { lineHeight: "0.98", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 5vw, 4.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.025em" },
        ],
        "display-md": [
          "clamp(1.75rem, 3vw, 2.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.015em" },
        ],
        "display-sm": [
          "clamp(1.35rem, 2vw, 1.85rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
      },
      letterSpacing: {
        luxe: "0.32em",
        caps: "0.22em",
        tightest: "-0.04em",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(12, 10, 5, 0.12)",
        lift: "0 30px 80px -20px rgba(12, 10, 5, 0.35)",
        gold: "0 20px 60px -18px rgba(194, 158, 72, 0.45)",
        "edge-top": "inset 0 1px 0 rgba(255,255,255,0.06)",
        "edge-gold": "inset 0 0 0 1px rgba(194, 158, 72, 0.18)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(194,158,72,0.14), transparent 65%)",
        "radial-warm":
          "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(194,158,72,0.18), transparent 70%)",
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "paper-noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.4  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 0.65 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/></svg>\")",
        "gold-thread":
          "linear-gradient(90deg, transparent, rgba(194,158,72,0.9) 20%, rgba(228,211,150,1) 50%, rgba(194,158,72,0.9) 80%, transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 1.1s ease-out forwards",
        shimmer: "shimmer 2.6s linear infinite",
        marquee: "marquee 42s linear infinite",
        "marquee-slow": "marquee 70s linear infinite",
        breathe: "breathe 9s ease-in-out infinite",
        "draw-line": "drawLine 1.4s cubic-bezier(0.22,1,0.36,1) forwards",
        "grain-drift": "grainDrift 8s steps(6) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.65", transform: "scale(1.06)" },
        },
        drawLine: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        grainDrift: {
          "0%":   { transform: "translate(0,0)" },
          "16%":  { transform: "translate(-3%, 4%)" },
          "32%":  { transform: "translate(4%, -2%)" },
          "48%":  { transform: "translate(-2%, -3%)" },
          "64%":  { transform: "translate(3%, 3%)" },
          "80%":  { transform: "translate(-4%, 1%)" },
          "100%": { transform: "translate(0,0)" },
        },
      },
    },
  },
  plugins: [],
};
