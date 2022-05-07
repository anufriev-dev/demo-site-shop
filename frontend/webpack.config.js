const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  mode: 'development' ,
  infrastructureLogging: {
    level: 'none',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot : true , 
  },
  devtool: 'source-map',
  output: {
    // clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
  new HtmlWebpackPlugin({template: './public/index.html'}),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({filename: '[name].css'}),
],
  module: {
    rules:[
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader ,'css-loader','sass-loader']
      },
      {
        test: /\.(jpg|png|jpeg|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[ext]'
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,exclude: /node_modules/, use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            // plugins: []
          }
        }
      }
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin()],
    minimize: true
  },
  resolve: {
    extensions: ['.js','.jsx',]
  }
}