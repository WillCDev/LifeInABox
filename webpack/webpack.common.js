const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const babelConfig = require('../.babelrc.json')

const fromCWD = (relPath) => path.resolve(process.cwd(), relPath)
const APP_DIR = fromCWD('./src')
const BUILD_DIR = fromCWD('./dist')
const ASSETS_DIR = fromCWD('./public')
const MODULES_DIR = fromCWD('./node_modules')

module.exports = {
  target: 'web',
  entry: { app: APP_DIR },
  output: {
    path: BUILD_DIR,
    chunkFilename: 'js/[name].[contenthash].js',
    filename: 'js/[name].[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /^((?!\.test\.).)*\.(ts|js)x?$/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
      // Our CSS
      {
        test: /\.(less|css)$/,
        include: [APP_DIR],
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: { localIdentName: '[name]__[local]__[hash:base64:5]' },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { plugins: [autoprefixer] },
            },
          },
          { loader: 'less-loader' },
        ],
      },
      // External CSS
      {
        test: /\.(less|css)$/,
        include: [MODULES_DIR],
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { plugins: [autoprefixer] },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    modules: [APP_DIR, ASSETS_DIR, MODULES_DIR],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${ASSETS_DIR}`,
          to: `${BUILD_DIR}`,
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      meta: { robots: 'noindex' },
      template: fromCWD(`./src/index.html`),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          maxSize: 244000,
          reuseExistingChunk: true,
        },
        app: {
          name: 'app',
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  stats: 'minimal',
}
