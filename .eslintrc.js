module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    camelcase: "off",
  },
};
