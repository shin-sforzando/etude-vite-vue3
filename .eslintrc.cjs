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
    'plugin:storybook/recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'src/stories/*.vue',
    'storybook-static/',
  ],
  overrides: [],
}
