var webpack = require('webpack');

module.exports = {
  entry: ['./src/index.js'],

  module: {
    loaders: [
      createProjectLoader({
        test: /\.(js|jsx)?$/,
        loader: 'react-hot!babel'
      }),
      createProjectLoader({
        test: /\.css$/,
        loader: 'style!css!autoprefixer?browsers=last 2 versions'
      })
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: resolveProjectPath('dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    devtool: 'eval-source-map',
    inline: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};


function createProjectLoader(loader) {
  var extend = require('util')._extend;

  return extend(loader, {
    include: [
      resolveProjectPath('src/'),
      resolveProjectPath('test/')
    ]
  });
}

function resolveProjectPath(path) {
  return require('path').resolve(__dirname, path);
}
