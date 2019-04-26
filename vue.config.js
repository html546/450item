module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: 'http://t450.shangtua.com'
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'nav-bar-background-color': '#181b2c',
          'nav-bar-icon-color': '#fff',
          'nav-bar-text-color': '#fff',
          'nav-bar-title-text-color': '#fff',
          'cell-background-color': "#0b1a3b",
          'cell-text-color': "#fff",
          'cell-active-color': '#0b1a3b'
        }
      }
    }
  }
}
