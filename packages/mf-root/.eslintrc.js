const path = require('path');

module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier '],
  rules: {
    // import rules
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        'groups': ['external', 'builtin', ['internal', 'unknown'], 'parent', 'sibling'],
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true
        },
        'newlines-between': 'always'
      }
    ],
    'import/prefer-default-export': 'off',
    // react rules
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.tsx', '.jsx']}],
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-max-props-per-line': ['error', {maximum: 3}],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    // react-refresh rules
    'react-refresh/only-export-components': 'warn',
    // ts rules
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    // sort-destructive-keys rules
    'sort-destructure-keys/sort-destructure-keys': ['warn', {caseSensitive: false}],
    // common
    'arrow-parens': 'off',
    'camelcase': 'off',
    'consistent-return': 'off',
    'function-paren-newline': 'off',
    'max-len': ['error', {code: 140}],
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-trailing-spaces': ['error', {skipBlackLines: true}],
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    'no-void': 'off',
    'object-curly-spacing': ['error', 'never']
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {tsconfigRootDir: '.'},
  plugins: ['@typescript-eslint', 'sort-destructive-keys', 'react-refresh'],
  settings: {
    'import/parsers': {'@typescript-eslint/parser': ['.ts', '.tsx']},
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './'
      },
      node: {
        paths: [path.resolve(__dirname, './')],
        extensions: ['.js', '.jsx', '.mdx', '.tsx', '.ts']
      }
    }
  }
};
