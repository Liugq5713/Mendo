const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: '../dist',
    port: 8080,
    // IpToModify
    host: '0.0.0.0',
    open: true,
    historyApiFallback: true,
    proxy: [
      {
        path: '/api/**',
        target: 'http://localhost:5000'
      },
      {
        path: '/api/room/*',
        target: 'http://localhost:5000'
      },
      {
        path: '/auth/*',
        target: 'http://localhost:5000'
      }
    ]
  }
})
