const path = require('path')
const { renderAssets } = require('serve-markdown-it-lib')

const ASSETS_SRC_PATH = path.join(__dirname, '../../res/assets')
const ASSETS_BUILD_PATH = path.join(__dirname, '../../public')
const USED_MATERIAL_ICONS = ['navigate-before']
const ASSETS = {
  fonts: 'fonts',
  'css/highlightjs': '~highlight.js/styles',
  'svg/icons/mime': '~file-icon-vectors/dist/icons/vivid',
  'js/simple-datatables': '~simple-datatables/dist/umd',
  'js/zepto': '~zepto/dist'
}

USED_MATERIAL_ICONS.forEach((icon) => {
  ASSETS[`svg/icons/material/${icon}.svg`] = (
    `~svg-icon/dist/svg/material/${icon}.svg`
  )
})

/**
 * @private
 */
const buildAssets = (options = {}) => renderAssets({
  quiet: false,
  dry: false,

  ...options,

  assets: ASSETS,
  srcPath: ASSETS_SRC_PATH,
  buildPath: ASSETS_BUILD_PATH
})

module.exports = buildAssets
