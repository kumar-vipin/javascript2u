const path = require('path'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({filename: './app/css/javascript2u.css'});

const config = {

  // absolute path for project root
  context: path.resolve(__dirname, 'src'),

  entry: {
    // relative path declaration
    javascript2u: './start.jsx'
  },

  output: {
    // absolute path declaration
    path: path.resolve(__dirname, 'dist'),
    filename: './app/js/[name].bundle.js'
  },

  module: {
    rules: [

      // babel-loader with 'env' preset
      {
        test: /\.js(x)$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['react', 'es2015', 'stage-2', 'env']
          }
        }
      },
      // html-loader
      {test: /\.html$/, use: ['html-loader']},
      // sass-loader with sourceMap activated
      {
        test: /\.(scss|css)$/,
        include: [path.resolve(__dirname, 'src', 'app', 'themes')],
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
        include: [path.resolve(__dirname, 'src', 'app', 'themes')],
        use: [{loader: "url-loader"}]
      }
    ]
  },

  plugins: [
    // cleaning up only 'dist' folder
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // extract-text-webpack-plugin instance
    extractPlugin
  ],

  devServer: {
    // static files served from here
    contentBase: path.resolve(__dirname, "./dist/app"),
    compress: true,
    // open app in localhost:9000
    port: 9000,
    stats: 'errors-only',
    open: false
  },

  devtool: 'inline-source-map',
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.js', '.json', '.jsx', '.css', '.scss']
  }

};

module.exports = config;