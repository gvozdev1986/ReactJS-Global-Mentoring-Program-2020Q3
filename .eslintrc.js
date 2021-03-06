module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
    "node": true,
    "jest": true
  },
  "extends": ["airbnb", "plugin:react/recommended", "prettier", "prettier/react"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "import/no-dynamic-require": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};
