const webpack = require('webpack')
module.exports = {
  // lintOnsave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
}
