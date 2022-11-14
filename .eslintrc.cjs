module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['vue'],
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  overrides: [],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
