const DEFAULT_CONFIG = {
  maxWidth: '960px',
  sections: {
    contentHeader: true,
    settings: true,
    debug: true,
    content: true,
    order: [
      'settings',
      'content',
      'debug'
    ]
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
