const path = require('path')
const _keys = require('lodash/keys')
const PI = require('p-iteration')
const renderSASS = require('../render/sass')
const getLogger = require('../util/get_logger')
const { STYLES, STYLES_SRC_PATH, STYLES_BUILD_PATH } = require('../constants')

const l = getLogger('build-styles')

/**
 * @private
 */
const buildStyles = () => (
  PI.forEach(_keys(STYLES), async (styleDest) => {
    const srcPath = path.join(STYLES_SRC_PATH, STYLES[styleDest])
    const buildPath = path.join(STYLES_BUILD_PATH, styleDest)

    await renderSASS({
      srcPath, buildPath, quiet: false, dry: false
    })

    l.success('built %s -> %s', srcPath, buildPath)
  }).catch((e) => {
    l.error('%s', e.stack)
  })
)

module.exports = buildStyles
