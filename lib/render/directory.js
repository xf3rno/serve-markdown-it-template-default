const _defaultsDeep = require('lodash/defaultsDeep')
const _isEmpty = require('lodash/isEmpty')
const njk = require('../nunjucks')
const getFileIconName = require('../util/get_file_icon_name')

const TEMPLATE = 'layouts/directory.njk'

/**
 * `configMD` unused from params, rest extracted for clarity.
 *
 * @private
 */
const renderPageDirectory = templateConfig => (params = {}) => {
  const { layout: layoutConfig = {} } = templateConfig
  const {
    global: globalLayout = {}, directory: dirLayout = {}
  } = layoutConfig

  const layout = _defaultsDeep({}, dirLayout, globalLayout)
  const {
    parentPath, flags, path, configHTML, totalSize, configMD, config, inRoot,
    nodes
  } = params

  const { explorer } = templateConfig

  if (_isEmpty(explorer)) {
    return 'File explorer disabled'
  }

  return njk.render(TEMPLATE, {
    templateConfig,
    layout,

    nodes: nodes.map(({ name, isDirectory, ...node }) => ({
      ...node,

      icon: getFileIconName(name, isDirectory),
      isDirectory,
      name
    })),

    parentPath,
    configHTML,
    totalSize,
    configMD,
    config,
    inRoot,
    flags,
    path
  })
}

module.exports = renderPageDirectory
