const path = require('path')
const _merge = require('lodash/merge')
const genRawSrcMarkdown = require('./markdown/gen_raw_src')
const genImageMarkdown = require('./markdown/gen_image')
const renderPageDirectory = require('./render/directory')
const renderPageFile = require('./render/file')
const buildStyles = require('./build/styles')
const buildAssets = require('./build/assets')
const getConfig = require('./config')

const TEMPLATE_DATA = {
  name: 'default',
  publicPath: path.join(__dirname, '../public/'),
  genRawSrcMarkdown,
  genImageMarkdown,
  buildAssets,
  buildStyles
}

/**
 * @private
 */
const template = (userConfig = {}) => {
  const config = getConfig(userConfig)

  return {
    renderPageDirectory: renderPageDirectory(config),
    renderPageFile: renderPageFile(config),
    config,

    ...TEMPLATE_DATA
  }
}

_merge(template, TEMPLATE_DATA)

module.exports = template
