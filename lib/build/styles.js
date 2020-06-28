const path = require('path')
const { renderStyles } = require('serve-markdown-it-lib')

const STYLES = { 'index.css': 'index.scss' }
const STYLES_SRC_PATH = path.join(__dirname, '../../res/styles/')
const STYLES_BUILD_PATH = path.join(__dirname, '../../public/')

/**
 * @private
 */
const buildStyles = (options = {}) => renderStyles({
  quiet: false,
  dry: false,

  ...options,

  styles: STYLES,
  srcPath: STYLES_SRC_PATH,
  buildPath: STYLES_BUILD_PATH
})

module.exports = buildStyles
