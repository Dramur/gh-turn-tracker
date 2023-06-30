module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true,
  },
  plugins: ['vue'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/unbound-method': 0,
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'vue/multi-word-component-names': 0,
    'ban-ts-ignore': 0,
  },
}
