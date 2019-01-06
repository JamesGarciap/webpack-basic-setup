const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/js/entry-points/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  }
}
