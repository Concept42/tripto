import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      scrollbar: {
        hide: "::-webkit-scrollbar { display: none; } -ms-overflow-style: none; scrollbar-width: none;"
      },
      screens: {
        "3xl": "1925px"
      },
      colors: {
        "primary-tertiary": "var(--colors-primary-tertiary)",
        "primary-oceanBlue": "var(--colors-primary-oceanBlue)",
        "primary-mistyBlue": "var(--colors-primary-mistyBlue)",
        "primary-skyBlue": "var(--colors-primary-skyBlue)",
        "primary-icyBlue": "var(--colors-primary-icyBlue)",
        "neutrals-black": "var(--colors-neutral-black)",
        "neutrals-grey100": "var(--colors-neutral-grey100)",
        "neutrals-grey80": "var(--colors-neutral-grey80)",
        "neutrals-grey60": "var(--colors-neutral-grey60)",
        "neutrals-grey40": "var(--colors-neutral-grey40)",
        "neutrals-grey20": "var(--colors-neutral-grey20)",
        "neutrals-grey10": "var(--colors-neutral-grey10)",
        "neutrals-grey05": "var(--colors-neutral-grey05)",
        "neutrals-white": "var(--colors-neutral-white)"
      },
      width: {
        "size-button": "var(--size-button)"
      },
      fontSize: {
        h1: ["3.25rem", { lineHeight: "4rem", fontWeight: "700" }],
        h2: ["2.75rem", { lineHeight: "3.5rem", fontWeight: "700" }],
        h3: ["2.5rem", { lineHeight: "3.25rem", fontWeight: "700" }],
        h4: ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        h5: ["1.75rem", { lineHeight: "2rem", fontWeight: "400" }],
        h6: ["1.5rem", { lineHeight: "1.75rem", fontWeight: "700" }],
        b1: ["1.25rem", { lineHeight: "2rem", fontWeight: "400", letterSpacing: "0.015rem" }],
        b2: [
          "1rem",
          {
            lineHeight: "2rem",
            fontWeight: "400",
            letterSpacing: "0.015625rem"
          }
        ],
        "size-buttonM": [
          "1rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "700",
            letterSpacing: "0.004rem"
          }
        ],
        "size-buttonS": [
          "0.875rem",
          {
            lineHeight: "1rem",
            fontWeight: "700",
            letterSpacing: "0.0035rem"
          }
        ],
        caption: ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }],
        subtitle2: ["1.125rem", { lineHeight: "1.25rem", fontWeight: "700" }]
      }
    }
  },
  plugins: []
} satisfies Config;
