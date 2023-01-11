module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'standard-with-typescript',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    eqeqeq: 'off',
    indent: 'off',
    'linebreak-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/naming-convention': 'warn',
    'comma-dangle': 'off',
    'spaced-comment': 'off',
    'no-undef': 'warn',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'n/handle-callback-err': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/dot-notation': 'off',
  },
};