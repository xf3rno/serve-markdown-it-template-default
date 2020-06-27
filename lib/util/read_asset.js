const path = require('path')
const { promises: fs } = require('fs')
const mime = require('mime-types')
const { ASSETS_BUILD_PATH } = require('../constants')

/**
 * @private
 */
const readAsset = async (assetPath) => {
  const srcPath = path.join(ASSETS_BUILD_PATH, assetPath)
  const src = await fs.readFile(srcPath)
  const type = mime.lookup(path.basename(assetPath)) || 'text/plain'

  return { src, type }
}

module.exports = readAsset
