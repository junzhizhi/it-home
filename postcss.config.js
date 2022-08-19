module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 转换的px的基准
      // 一个元素宽是75，转换成rem之后就是2rem
      rootValue: 37.5,
      propList: ['*'] // 属性的选择器，*表示通用
    }
  }
}
