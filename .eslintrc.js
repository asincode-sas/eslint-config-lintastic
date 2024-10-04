module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // If using React
    'plugin:@typescript-eslint/recommended', // If using TypeScript
  ],
  parser: '@typescript-eslint/parser', // If using TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // If using React
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react', // If using React
    '@typescript-eslint', // If using TypeScript
  ],
  rules: {
    // Custom rules
    'no-console': 'warn',
    'semi': ['error', 'always'],
    // Add more custom rules here
  },
};
