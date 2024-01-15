module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['**/*.ts', '**/*.js'],
      extends: ['plugin:@mjsdo/common'],
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@mjsdo/typescript'],
    },
    {
      files: ['**/*.jsx', '**/*.tsx'],
      extends: [
        'react-app',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
