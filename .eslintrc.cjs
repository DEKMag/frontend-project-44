module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'airbnb-base/legacy',
    'plugin:react/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'import'
  ],
  rules: {
    'no-var': 'error',
    'no-console': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'always' }
    ]
  }
};
