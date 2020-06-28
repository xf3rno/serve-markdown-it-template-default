const DEFAULT_CONFIG = {
  maxWidth: '960px',
  animate: false,

  layout: {
    global: {
      contentHeader: true,
      settings: true,
      content: true,
      debug: true,

      order: [
        'settings',
        'content',
        'debug'
      ]
    },

    file: {
      contentHeader: true,
      settings: true,
      content: true,
      debug: true,

      order: [
        'settings',
        'content',
        'debug'
      ]
    },

    directory: {
      contentHeader: true,
      settings: true,
      content: true,
      debug: true,

      order: [
        'settings',
        'content',
        'debug'
      ]
    }
  },

  explorer: {
    icons: true,
    columns: [
      'name',
      'user',
      'group',
      'mode',
      'type',
      'size'
    ],

    dataTable: {
      searchable: true,
      sortable: true,

      perPage: 25,
      perPageSelect: [10, 25, 50, 100],
      fixedHeight: false,

      layout: {
        top: '{select}{search}',
        bottom: '{pager}'
      }
    }
  }
}

module.exports = DEFAULT_CONFIG
