// https://stylelint.io/

module.exports = {
  plugins: [
    'stylelint-prettier'
  ],
  extends: [
    // standard 规则集合
    'stylelint-config-standard',
    // standard 规则集合的 scss 版本
    'stylelint-config-standard-scss',
    // 样式属性顺序规则
    'stylelint-config-recess-order',
    // vue规则
    'stylelint-config-html/vue',
    "stylelint-config-recommended-vue",
    "stylelint-config-recommended-vue/scss",
    // 接入 Prettier 规则
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
  ],
  // customSyntax: 'postcss-html',
  // 配置 rules
  rules: {
    // 开启 Prettier 自动格式化功能
    'prettier/prettier': true,
    'indentation': 2,
    'color-hex-case': 'lower',
    'function-url-quotes': 'always',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin']
      }
    ],
  }
}
