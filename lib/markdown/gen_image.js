/**
 * Generate a markdown string to display an image at `relPath`.
 *
 * @param {object} params - params
 * @param {string} params.relPath - path relative to content root path.
 * @param {string} params.name - image alt text.
 * @returns {string} md
 */
const genImageMarkdown = ({ relPath, name }) => `![${name}](${relPath}/raw)`

module.exports = genImageMarkdown
