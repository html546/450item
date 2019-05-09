const BASE_URL = process.env.NODE_ENV == 'production' ? '/static/settlement/vue_mobile1/' : '/';
module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  devServer: {
    proxy: 'http://t450.shangtua.com'
  },
  assetsDir: 'static',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'nav-bar-background-color': '#181b2c',
          'nav-bar-icon-color': '#ffffff',
          'nav-bar-text-color': '#ffffff',
          'nav-bar-title-text-color': '#ffffff',
          'cell-background-color': '#0b1a3b',
          'cell-text-color': '#ffffff',
          'cell-active-color': '#0b1a3b',
          'field-input-text-color': '#ffffff',
          'field-input-disabled-text-color': '#ffffff',
          'field-placeholder-text-color': '#ffffff'
        }
      }
    }
  },

}
