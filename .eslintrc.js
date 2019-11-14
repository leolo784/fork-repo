module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint", "node"],
  "globals": {
    "__DEV__": false,
    "jasmine": false,
    "beforeAll": false,
    "afterAll": false,
    "beforeEach": false,
    "afterEach": false,
    "test": false,
    "expect": false,
    "describe": false,
    "jest": false,
    "it": false
  },
  "rules": {
    "semi": "off",
    "@typescript-eslint/semi": ["error", "never"],
    "max-len": ["error", { "code": 180 }],
    "no-unused-vars": 0,
    "no-undef": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-var-requires": 0,
    "no-nested-ternary": 0,
    "class-methods-use-this": 0,
    "global-require": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true,
        "optionalDependencies": false,
        "peerDependencies": false
      }
    ],
    "no-await-in-loop": 0,
    "comma-dangle": ["error", {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      "functions": "ignore"
    }],
    "import/prefer-default-export": 0,
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["self"] }],
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "no-console": "off",
    "import/no-cycle": ["error", { maxDepth: 1 }],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],
  }
};
