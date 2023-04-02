module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
  ],
};
