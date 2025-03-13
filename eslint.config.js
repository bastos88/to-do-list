import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";

export default [
  { ignores: ["dist"] }, // Ignora a pasta 'dist'
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettier,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      ...js.configs.recommended.rules, // Regras do ESLint padrão
      ...react.configs.recommended.rules, // Regras recomendadas do React
      ...reactHooks.configs.recommended.rules, // Regras do React Hooks
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "prettier/prettier": "error",
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
