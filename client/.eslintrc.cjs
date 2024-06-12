module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "react-app",
    "plugin:jsx-a11y/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react", "react-hooks", "import", "jsx-a11y", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": 0,
    indent: ["error", 2],
    quotes: ["error", "double"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/prop-types": "off",
    "react/jsx-no-target-blank": ["error", { allowReferrer: true }],
    "jsx-a11y/alt-text": ["warn", { elements: ["img"] }],
    "no-unused-vars": "off",
    "jsx-quotes": ["error", "prefer-double"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
