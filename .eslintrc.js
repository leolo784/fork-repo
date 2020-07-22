module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['*.js'],
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false,
  },
  rules: {
    'no-console': 'off',
    'no-nested-ternary': 'off',
    'class-methods-use-this': 'warn',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['self'] },
    ],
    'no-unused-expressions': 'warn',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-await-in-loop': 'warn',
    'global-require': 'warn',

    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    '@typescript-eslint/camelcase': 'off', // deprecated rules. To suppress default rule from airbnb config
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
      },
      {
        selector: 'property',
        format: ['camelCase', 'snake_case', 'PascalCase'],
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'property',
        filter: '^REACT_APP',
        format: ['UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/prefer-optional-chain': ['error'],
    '@typescript-eslint/prefer-nullish-coalescing': ['error'],

    'import/prefer-default-export': 'off',
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': ['warn', { maxDepth: 1 }],
  },
}
