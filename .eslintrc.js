module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "import/extensions": 0,
    "jsx-a11y/alt-text": 0,
  },
};
