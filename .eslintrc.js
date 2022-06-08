module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: "module",
  },
  ignorePatters: [
    "/bin/**/*",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  "rules": {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
  }
}