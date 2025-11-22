import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import tsParser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'
import reactNative from 'eslint-plugin-react-native'
import typescript from '@typescript-eslint/eslint-plugin'

export default [
  js.configs.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsParser,
      globals: {
        ...globals.node,
        ...globals.es2026,
        ...globals.browser,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-native': reactNative,
      '@typescript-eslint': typescript,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...reactNative.configs.all.rules,
      ...typescript.configs.recommended.rules,

      semi: ['error', 'never'],
      'react-hooks/refs': 'off',
      'react/prop-types': 'off',
      'react-hooks/purity': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-native/sort-styles': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/static-components': 'off',
      'react-native/no-unused-styles': 'off',
      'react-native/no-inline-styles': 'off',
      'react-native/no-color-literals': 'warn',
      'react-hooks/set-state-in-effect': 'off',
      'react-native/split-platform-components': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
]
