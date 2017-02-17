const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    './main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-eval-source-map'
};
