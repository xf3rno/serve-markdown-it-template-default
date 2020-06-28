const _defaultsDeep = require('lodash/defaultsDeep')
const njk = require('../nunjucks')

const TEMPLATE = 'layouts/file.njk'

/**
 * @private
 */
const renderPageFile = templateConfig => (params = {}) => {
  const { layout: layoutConfig = {} } = templateConfig
  const {
    global: globalLayout = {}, file: fileLayout = {}
  } = layoutConfig

  const layout = _defaultsDeep({}, fileLayout, globalLayout)

  return njk.render(TEMPLATE, { ...params, templateConfig, layout })
}

module.exports = renderPageFile
