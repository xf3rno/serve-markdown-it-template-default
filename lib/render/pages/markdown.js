const njk = require('../../nunjucks')

const TEMPLATE = 'layouts/file_md.njk'

/**
 * `configMD` and `src` unused from params, rest extracted for clarity
 *
 * @private
 */
const renderPageMarkdown = templateConfig => (params = {}) => {
  const {
    parentPath, type, title, path, configHTML, config, inRoot, flags, size,
    html, data
  } = params

  return njk.render(TEMPLATE, {
    templateConfig,
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
