const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    watchFiles: ['src/**/*'],
  },
};

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  entry: {
    main: './src/pages/main/index.js',
    pets: './src/pages/pets/index.js',
    mainStyles: './src/pages/main/style.scss',
    petsStyles: './src/pages/pets/style.scss',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon/favicon.ico",
      template: './src/pages/main/index.html',
      filename: 'main/index.html',
      chunks: ['main', 'mainStyles'],
      inject: 'body',
      scriptLoading: 'defer',
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon/favicon.ico",
      template: './src/pages/pets/index.html',
      filename: 'pets/index.html',
      chunks: ['pets', 'petsStyles'],
      inject: 'body',
      scriptLoading: 'defer',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/images',
          to: 'images',
          noErrorOnMissing: true,
        },
        {
          from: 'src/assets/favicon/favicon.ico',
          to: '',
        },
        {
          from: 'src/assets/fonts',
          to: 'fonts',
        }
      ],
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ["imagemin-mozjpeg", { quality: 80 }],
            ['imagemin-pngquant', { quality: [0.6, 0.8] }],
            ['imagemin-svgo', {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            }],
          ],
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
  ...devServer(development),
});
