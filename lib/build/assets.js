const renderAssets = require('../render/assets')
const getLogger = require('../util/get_logger')
const { ASSETS, ASSETS_SRC_PATH, ASSETS_BUILD_PATH } = require('../constants')

const l = getLogger('build-assets')

/**
 * @todo refactor; used to be in scripts/
 * @private
 */
const buildAssets = () => (
  renderAssets({
    assets: ASSETS,
    srcPath: ASSETS_SRC_PATH,
    buildPath: ASSETS_BUILD_PATH,
    quiet: false,
    dry: false
  }).then(() => {
    l.success('built assets %s -> %s', ASSETS_SRC_PATH, ASSETS_BUILD_PATH)
  }).catch((e) => {
    l.error('%s', e.stack)
  })
)

module.exports = buildAssets
