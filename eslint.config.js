import eslint from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import tseslint from 'typescript-eslint';

/**
 * ESLint config.
 *
 * @type {import('typescript-eslint').Config}
 */
const config = tseslint.config(
  eslint.configs.recommended,

  tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/typedef': [
        'warn',
        {
          parameter: true,
        },
      ],

      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends',
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],

      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true,
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': ['warn'],
      '@typescript-eslint/explicit-member-accessibility': ['warn'],
    },
  },

  {
    files: ['*.js', '*.jsx'],
    ...jsdoc.configs['flat/recommended'],
  },
  {
    files: ['*.ts', '*.tsx'],
    ...jsdoc.configs['flat/recommended-typescript'],
  },
  {
    rules: {
      'jsdoc/require-jsdoc': [
        'warn',
        {
          require: {
            ClassDeclaration: true,
            ClassExpression: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true,
          },
        },
      ],
      'jsdoc/require-param': [
        'warn',
        {
          checkDestructured: false,
        },
      ],
      'jsdoc/require-returns': [
        'warn',
        {
          contexts: ['FunctionDeclaration', 'FunctionExpression'],
        },
      ],

      'jsdoc/check-param-names': [
        'warn',
        {
          checkDestructured: false,
        },
      ],

      'jsdoc/tag-lines': [
        'warn',
        'always',
        {
          count: 0,
          startLines: 1,
        },
      ],
    },
  },
);

export default config;
