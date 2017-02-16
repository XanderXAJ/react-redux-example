const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, 'www')));

// Builds and serves files in memory
// NOTE: If a file exists on disk, the disk version will always be served -- take note after compiling
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true
  }
}));

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
