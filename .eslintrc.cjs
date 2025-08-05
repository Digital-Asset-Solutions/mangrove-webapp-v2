/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint", "@tanstack/query"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:storybook/recommended",
  ],
  rules: {
    // Disable strict TypeScript rules for easier development
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/prefer-as-const": "off",
    
    // Disable import type warnings
    "@typescript-eslint/consistent-type-imports": "off",
    
    // Relax unused variable rules
    "@typescript-eslint/no-unused-vars": ["warn", { 
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      ignoreRestSiblings: true 
    }],
    
    // Disable React hooks exhaustive deps warnings
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "off",
    
    // Disable display name requirement
    "react/display-name": "off",
    
    // Change unescaped entities from error to warning
    "react/no-unescaped-entities": "warn",
    
    // Disable TanStack Query exhaustive deps
    "@tanstack/query/exhaustive-deps": "off",
    
    // Keep basic formatting rules
    "semi": ["error", "never"],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    "@typescript-eslint/no-floating-promises": "off",
  },
  ignorePatterns: [
    "components/trading-view/sample.js",
    "**/*.js"
  ],
}

module.exports = config
