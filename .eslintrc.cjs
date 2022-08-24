module.exports = {
  extends: ['eslint-config-woda/typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'implicit-arrow-linebreak': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
};
