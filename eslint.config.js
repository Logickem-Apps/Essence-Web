import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // Ignora el `import React` (innecesario con el JSX transform nuevo, pero inofensivo),
      // los args con prefijo _ y los parámetros de catch no usados.
      'no-unused-vars': ['error', { varsIgnorePattern: '^React$', argsIgnorePattern: '^_', caughtErrors: 'none' }],
      // Patrones válidos del código generado (fetch en efectos, exports mixtos para HMR):
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/purity': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    // Archivos de configuración: corren en Node (module/require/__dirname).
    files: ['**/*.config.{js,cjs}', 'vite.config.js', 'tailwind.config.js', 'postcss.config.js'],
    languageOptions: { globals: globals.node },
  },
])
