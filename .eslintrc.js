module.exports = {
   parser: '@typescript-eslint/parser', // Specifies the ESLint parser
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
      'prettier',
   ],
   settings: {
      react: {
         version: 'detect',
      },
   },
   env: {
      browser: true,
      node: true,
      es6: true,
   },
   plugins: ['@typescript-eslint', 'react'],
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
   },
   rules: {
      'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Custom
      'prettier/prettier': 0,
      '@typescript-eslint/no-explicit-any': 0,
   },
   overrides: [
      // Override some TypeScript rules just for .js files
      {
         files: ['*.js', '*.jsx'],
         rules: {
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 0,
         },
      },
   ],
};
