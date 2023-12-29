/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-Outfit)"],
				display: ["var(--font-Outfit)"],
				body: ["var(--font-Outfit)"]
			},
			colors: {
				border: "#e2e8f0",
				input: "#e2e8f0",
				ring: "#020817",
				good: "#57ca3a",
				warning: "#eec22c",
				"warning-100": "#fffce2",
				background: "#f7f8fa",
				foreground: "#222",
				primary: {
					DEFAULT: "#222",
					foreground: "#f7f8fa"
				},
				secondary: {
					DEFAULT: "#c72b1d",
					foreground: "#f7f8fa"
				},
				destructive: {
					DEFAULT: "#ef4444",
					foreground: "#f7f8fa"
				},
				accent: {
					DEFAULT: "#222",
					foreground: "#f7f8fa"
				},
				base: {
					DEFAULT: "#e7e7e7",
					100: "#64748b",
					content: "#383838"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out"
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
}
