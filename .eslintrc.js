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
      files: ['**/*.{j,t}s?(x)'],
      extends: ['plugin:@mjsdo/common'],
    },
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@mjsdo/typescript'],
    },
    {
      files: ['**/*.{j,t}sx'],
      extends: [
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
