const MAX_LEN = 120;
module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.js'],
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:prettier/recommended',
      ],
      rules: {
        'no-unused-vars': [
          'warn',
          { args: 'after-used', argsIgnorePattern: 'Service$|^_' },
        ],

        // 块级注释前有空行
        'lines-around-comment': ['error', { beforeBlockComment: true }],
        curly: ['error'],
        eqeqeq: ['error'],
        'no-var': ['error'],
        'no-caller': ['error'],
        'require-await': ['error'],
        'no-undef': 'off',
        '@angular-eslint/no-empty-lifecycle-method': ['warn'],
        'no-duplicate-imports': ['error'],
        'sort-imports': ['error', { ignoreDeclarationSort: true }],
        'arrow-body-style': ['error', 'as-needed'],
        'max-classes-per-file': ['error', 1],
        'max-lines': ['error', { max: 1000, skipBlankLines: true }],
        'max-len': ['warn', { code: MAX_LEN, comments: 240, ignoreUrls: true }],
        'sort-vars': 'error',
        'no-unneeded-ternary': 'error',
        'no-lonely-if': 'error',
        'object-curly-newline': [
          'error',
          {
            ObjectExpression: { multiline: true, minProperties: 4, consistent: true, },
            ObjectPattern: { multiline: true, minProperties: 4, consistent: true, },
            ImportDeclaration: { multiline: true, minProperties: 4, consistent: true, },
            ExportDeclaration: { multiline: true, minProperties: 4, consistent: true, },
          },
        ],
        'prettier/prettier': ['error', { printWidth: MAX_LEN, singleQuote: true }],
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
    {
      files: ['*.html'],
      excludedFiles: ['*inline-template-*.component.html'],
      extends: ['plugin:prettier/recommended'],
      rules: { 'prettier/prettier': ['error', { parser: 'angular', printWidth: MAX_LEN }] },
    },
  ],
};
