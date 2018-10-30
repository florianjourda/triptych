// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // 'standard'
  ],
  plugins: [
    // Required to lint *.vue files.
    'vue',
  ],
  rules: {
    'array-bracket-spacing': 'error',
    'arrow-spacing': 'error',
    'brace-style': ['error', '1tbs', {'allowSingleLine': false}],
    'camelcase': ['error', {'properties': 'always'}],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'dot-location': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'func-call-spacing': 'error',
    // Allow async-await.
    'generator-star-spacing': 'off',
    'global-strict': 0,
    // 'import/extensions': ['error'],
    // 'import/first': ['error', 'absolute-first'],
    // 'import/newline-after-import': 'error',
    // 'import/unambiguous': 0,
    'indent': ['error', 2, {'SwitchCase': 1}],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'lines-between-class-members': 'error',
    'max-len': ['error', 200, 4, {'ignoreUrls': true}],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-else-return': 'error',
    'no-irregular-whitespace': ['error', {'skipStrings': false}],
    'no-lonely-if': 'error',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-unexpected-multiline': 'error',
    'no-unused-vars': ['error', {'argsIgnorePattern': '^unused[A-Z]'}],
    'no-use-before-define': ['error', {'functions': false, 'classes': false}],
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'never'],
    'operator-assignment': 'error',
    'prefer-const': 'error',
    'quotes': ['error', 'single', 'avoid-escape'],
    'rest-spread-spacing': 'error',
    'semi': ['error', 'never'],
    // 'sort-keys': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
  },
}
