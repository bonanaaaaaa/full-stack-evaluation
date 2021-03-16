const cssnano = require('cssnano')
const postcssPresetEnv = require('postcss-preset-env')

module.export = {
  plugins: [cssnano(), postcssPresetEnv()],
}