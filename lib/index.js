const renderPageDirectory = require('./render/pages/directory')
const renderPageMarkdown = require('./render/pages/markdown')
const genRawSrcMarkdown = require('./markdown/gen_raw_src')
const genImageMarkdown = require('./markdown/gen_image')
const readAsset = require('./util/read_asset')
const buildAssets = require('./build/assets')
const buildStyles = require('./build/styles')
const getConfig = require('./config')

/**
 * @private
 */
const defaultTemplate = (userConfig = {}) => {
  const config = getConfig(userConfig)

  return {
    name: 'default',
    renderPageDirectory: renderPageDirectory(config),
    renderPageMarkdown: renderPageMarkdown(config),
    genRawSrcMarkdown,
    genImageMarkdown,
    buildAssets,
    buildStyles,
    readAsset,
    config
  }
}

module.exports = defaultTemplate
