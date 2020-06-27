const path = require('path')

const NAME = 'default'

const STYLES = { 'index.css': 'index.scss' }
const STYLES_SRC_PATH = path.join(__dirname, '../res/styles')
const STYLES_BUILD_PATH = path.join(__dirname, '../public')

const ASSETS_SRC_PATH = path.join(__dirname, '../res/assets')
const ASSETS_BUILD_PATH = path.join(__dirname, '../public')
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

module.exports = {
  NAME,
  ASSETS,
  ASSETS_SRC_PATH,
  ASSETS_BUILD_PATH,
  STYLES_BUILD_PATH,
  STYLES_SRC_PATH,
  STYLES
}
