module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  // HERE
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],

  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    //'@typescript-eslint/explicit-function-return-type': 'off',
    //'@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },

  env: {
    "browser": true,
    "es2021": true
  }
};