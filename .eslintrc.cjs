// 检查代码质量

// 由于 eslint 和 prettier 有重叠功能，为了避免冲突要装【pnpm i eslint-plugin-prettier@latest -D】

module.exports = {
  // root: true,
  // 指定代码的运行环境。
  env: {
    es2020: true,
    node: true,
    browser: true,
  },
  settings: {
    //自动检测React的版本，从而进行规范代码。
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // 避免与 prettier 冲突
  ],
  parser: '@typescript-eslint/parser', // 解析 TypeScript 代码
  parserOptions: {
    parser: '@babel/eslint-parser', // 指定 eslint 可以解析 JSX 语法。
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-refresh', '@typescript-eslint'],
  // ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    semi: 'off', // 不强制在语句末尾使用分号。
    'arrow-body-style': 'off', // 不强制在箭头函数体周围使用大括号。
    'no-console': 'off', // 关闭使用 console 报错。
    'no-undef': 'warn', // 使用 undefined 时警告。
    'no-shadow': 'off', // 允许变量覆盖声明。
    'react/jsx-uses-react': 'off', // 无须在组件中显式 import React。
    'react/react-in-jsx-scope': 'off', // 确保已经正确引入了 React 库。
    '@typescript-eslint/no-explicit-any': ['off'], // 允许使用 any 类型。
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ], // 允许使用短路、三目运算。
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ], // 函数形参可修改。
  },
};
