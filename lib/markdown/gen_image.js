const path = require('path')

/**
 * @private
 */
const genImageMarkdown = ({ relPath, name }) => {
  const imgPath = relPath
    .split(path.sep)
    .map(encodeURIComponent)
    .join(path.sep)

  return `![${name}](${imgPath}/raw)`
}

module.exports = genImageMarkdown
