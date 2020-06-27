const { promises: fs } = require('fs')
const path = require('path')

/**
 * @private
 */
const genRawSrcMarkdown = async ({ srcPath }) => {
  const ext = path.extname(srcPath)
  const src = await fs.readFile(srcPath, 'utf-8')

  return {
    flags: 'single-code-fence',
    md: [
      `\`\`\`${ext.slice(1)}`,
      src.trim(),
      '```'
    ].join('\n')
  }
}

module.exports = genRawSrcMarkdown
