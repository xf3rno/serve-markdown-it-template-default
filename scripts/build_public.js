const path = require('path')
const { buildAssets, buildStyles } = require('../')

const opts = {
  requirePath: path.join(__dirname, '../'),
  includePaths: [
    path.join(__dirname, '../node_modules/'),
    path.join(__dirname, '../res/styles/')
  ]
}

buildAssets(opts).then(() => buildStyles(opts)).then(() => {
  console.log('done')
}).catch((e) => {
  console.error(e.stack)
})
