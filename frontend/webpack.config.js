const path                        = require('path')
const HtmlWebpackPlugin           = require('html-webpack-plugin')
const MiniCssExtractPlugin        = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin   = require('css-minimizer-webpack-plugin')
const BundleAnalyzer              = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Dotenv                      = require('dotenv-webpack')

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
    open: true,
    compress: true 
  },
  devtool: 'source-map',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[contenthash].js',
    assetModuleFilename: 'static/media/[name].[contenthash][ext]'
  },
  module: {
    rules:[
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader ,'css-loader','sass-loader']
      },
      {
        test: /\.(jpg|png|jpeg|svg|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        exclude: /node_modules/,
        type: 'asset/resource'
      },
      {
        test: /\.(js|jsx)$/,exclude: /node_modules/, use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'}),
    new MiniCssExtractPlugin({filename: 'static/css/[name].[contenthash].css'}),
    new BundleAnalyzer(),
    new Dotenv({path: path.resolve(__dirname,'src','config','.env')})
  ],
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin()],
    minimize: true
  },
  resolve: {
    extensions: ['.js','.jsx',]
  }
}