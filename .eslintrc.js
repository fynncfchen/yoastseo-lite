module.exports = {
  root: true,
  extends: ['yoast', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  plugins: ['yoast', 'prettier'],
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': ['error'],
  },
};
