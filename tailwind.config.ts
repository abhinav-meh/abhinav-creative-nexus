import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'space-mono': ['Space Mono', 'monospace'],
				sans: ['Space Mono', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				category: {
					product: 'hsl(var(--category-product))',
					website: 'hsl(var(--category-website))',
					feature: 'hsl(var(--category-feature))',
					research: 'hsl(var(--category-research))',
					experiment: 'hsl(var(--category-experiment))'
				}
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135deg, hsl(var(--hero-gradient-from)), hsl(var(--hero-gradient-via)), hsl(var(--hero-gradient-to)))',
				'card-gradient': 'linear-gradient(145deg, hsl(var(--card)) 0%, hsl(var(--secondary)) 100%)',
				'grid-pattern': `url("data:image/svg+xml,%3csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 0h64v1H0z' fill='none' stroke='%23374151' stroke-width='0.5' stroke-dasharray='3,3' opacity='0.3'/%3e%3cpath d='M0 0v64h1V0z' fill='none' stroke='%23374151' stroke-width='0.5' stroke-dasharray='3,3' opacity='0.3'/%3e%3c/svg%3e")`,
				'dot-pattern': 'radial-gradient(circle, hsl(var(--grid-color)) 1px, transparent 1px)'
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'hero': 'var(--shadow-hero)'
			},
			animation: {
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.6s ease-out'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
