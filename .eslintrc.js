module.exports = {
   parser: '@typescript-eslint/parser',
   plugins: ['@typescript-eslint'],
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      // Uncomment the following lines to enable eslint-config-prettier
      // Is not enabled right now to avoid issues with the Next.js repo
      'prettier',
      'prettier/@typescript-eslint',
   ],
   env: {
      es6: true,
      browser: true,
      jest: true,
      node: true,
   },
   rules: {
      'react/react-in-jsx-scope': 0,
      'react/display-name': 0,
      'react/prop-types': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/indent': 0,
      '@typescript-eslint/member-delimiter-style': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-use-before-define': 0,
      'no-console': [
         2,
         {
            allow: ['warn', 'error'],
         },
      ],

      // Customized
      '@typescript-eslint/triple-slash-reference': 0,
      '@typescript-eslint/interface-name-prefix': 0,
      semi: 1,
      '@typescript-eslint/ban-ts-ignore': 0,
      /// Override rules if required to follow `airbnb`
      '@typescript-eslint/no-unused-vars': [
         'error',
         {
            varsIgnorePattern: 'logger',
            args: 'none',
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
         },
      ],
   },
};
