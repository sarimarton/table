import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    },
    overrides: [
      {
        // Only React
        files: ['**/*.{ts,tsx}'],
        rules: {
          '@typescript-eslint/ban-types': [
            'error',
            {
              extendDefaults: true,
              types: {
                // Allow type CmpProps = {} for React components. This is safe,
                // so the "non-nullable" warning is a useless annoyance. See
                // https://stackoverflow.com/questions/66773897/react-using-typescript-dont-use-as-a-type#comment131463383_66773898
                // https://github.com/typescript-eslint/typescript-eslint/issues/2063
                '{}': false
              }
            }
          ]
        }
      }
    ]
  }
)
