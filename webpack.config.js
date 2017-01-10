
var extractTextPlugin = require('extract-text-webpack-plugin');
var css = new extractTextPlugin("[name].css");
module.exports = {
  plugins: [
    css
  ],
  entry: {
    main: './main.css',
  },
  output: {
      path: __dirname + '/dist',
      filename: "[name].css"
  },
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: extractTextPlugin.extract("style-loader","css-loader!postcss-loader")
      }
    ]
  },
  postcss: function () {
    return [
      require('precss'),
      require('autoprefixer')
    ];
  }
}
