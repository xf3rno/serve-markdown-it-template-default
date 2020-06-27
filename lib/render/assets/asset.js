const fsSync = require('fs')
const path = require('path')
const fsExtra = require('fs-extra')

const { promises: fs } = fsSync

/**
 * @private
 */
const renderAsset = async ({ srcPath, buildPath }) => {
  const buildDir = path.dirname(buildPath)

  try {
    await fs.access(buildDir)
  } catch (e) {
    await fs.mkdir(buildDir, { recursive: true })
  }

  await fsExtra.copy(srcPath, buildPath, { overwrite: true })
}

module.exports = renderAsset
