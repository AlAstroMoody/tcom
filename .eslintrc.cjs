/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
const antfu = require('@antfu/eslint-config').default

module.exports = antfu()

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
