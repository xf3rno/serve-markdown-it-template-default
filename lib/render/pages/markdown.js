const _defaultsDeep = require('lodash/defaultsDeep')
const njk = require('../../nunjucks')

const TEMPLATE = 'layouts/file_md.njk'

/**
 * `configMD` and `src` unused from params, rest extracted for clarity
 *
 * @private
 */
const renderPageMarkdown = templateConfig => (params = {}) => {
  const { layout: layoutConfig = {} } = templateConfig
  const {
    global: globalLayout = {}, file: fileLayout = {}
  } = layoutConfig

  const layout = _defaultsDeep({}, fileLayout, globalLayout)
  const {
    parentPath, type, title, path, configHTML, config, inRoot, flags, size,
    html, data
  } = params

  return njk.render(TEMPLATE, {
    templateConfig,
    layout,

    parentPath,
    configHTML,
    config,
    inRoot,
    title,
    flags,
    size,
    html,
    data,
    path,
    type
  })
}

module.exports = renderPageMarkdown
