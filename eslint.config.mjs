import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwindcss from "eslint-plugin-tailwindcss";
import jsxA11y from "eslint-plugin-jsx-a11y";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["node_modules/", "dist/", "build/", "public/", ".next/"]
  },
  {
    plugins: {
      tailwindcss,
      "jsx-a11y": jsxA11y,
      "simple-import-sort": simpleImportSort,
      prettier
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          printWidth: 120,
          tabWidth: 2,
          singleQuote: false,
          trailingComma: "none",
          bracketSpacing: true,
          arrowParens: "always",
          endOfLine: "lf",
          semi: true,
          useTabs: false,
          quoteProps: "as-needed",
          proseWrap: "preserve"
        }
      ],
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "warn"
    },
    settings: {
      "tailwindcss.configs": "./tailwind.config.ts"
    }
  }
];
export default eslintConfig;
