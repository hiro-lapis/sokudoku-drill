module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['vue'],
  rules: {
    // 'comma-dangle': ['error', 'always-multiline'],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['default'],
      },
    ],
  },
}
