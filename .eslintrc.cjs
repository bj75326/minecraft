module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),

  plugins: [ 'prettier', 'simple-import-sort' ],

  rules: {
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            '^vue', // vue放在首行
            // 以字母(或数字或下划线)或“@”后面跟着字母开头的东西,通常为nodeModules引入
            '^@?\\w',
            '^@(/.*|$)', // 内部导入 "@/"
            '^\\.\\.(?!/?$)', // 父级导入. 把 `..` 放在最后.
            '^\\.\\./?$',
            // 同级导入. 把同一个文件夹.放在最后
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            '^.+\\.?(css|less|scss)$', // 样式导入.
            '^\\u0000', // 带有副作用导入，比如import 'a.css'这种.
          ],
        ]
      }
    ]
  },
}
