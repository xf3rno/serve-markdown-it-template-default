// eslint-why varying config merge
/* eslint-disable complexity */

const _defaults = require('lodash/defaults')

const DEFAULT_CONFIG = require('./default')

/**
 * @private
 */
const getConfig = (userConfig = {}) => ({
  ...DEFAULT_CONFIG,
  ...userConfig,

  layout: userConfig.layout || DEFAULT_CONFIG.layout,
  explorer: {
    ...DEFAULT_CONFIG.explorer,
    ...(userConfig.explorer || {}),

    columns: (
      (userConfig.explorer || {}).columns ||
      DEFAULT_CONFIG.explorer.columns
    ),

    dataTable: (userConfig.explorer || {}).dataTable === false
      ? false
      : {
        ...DEFAULT_CONFIG.explorer.dataTable,
        ...((userConfig.explorer || {}).dataTable || {}),

        perPageSelect: (
          ((userConfig.explorer || {}).dataTable || {}).perPageSelect ||
          DEFAULT_CONFIG.explorer.dataTable.perPageSelect
        ),

        layout: _defaults(
          ((userConfig.explorer || {}).dataTable || {}).layout,
          DEFAULT_CONFIG.explorer.dataTable.layout
        )
      }
  }
})

module.exports = getConfig
