const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/[name].[contenthash][ext]',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),

    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      clientsClaim: true,
      skipWaiting: true,
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp([
            '^https://restaurant-api.dicoding.dev/',
          ]),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'LocalFoodieMap_API_Cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp([
            '^https://fonts.googleapis.com',
          ]),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'Google_Fonts_API_Cache',
          },
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp([
            '^https://fonts.gstatic.com',
          ]),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'Google_Fonts_API_Cache',
          },
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('^https://images.unsplash.com/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'Food_Images_API_Cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('^https://cdn.idntimes.com/content-images/community/2021/01/fromandroid-bce44a3308ea3357c8f5754197c2fd16.jpg'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'Food_Images_API_Cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('^https://img-global.cpcdn.com/recipes/e0ef98867787a8ac/680x482cq70/kwetiau-goreng-medan-telur-bebek-mie-kuetiau-foto-resep-utama.jpg'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'Food_Images_API_Cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('^https://img.qraved.co/v2/image/data/Indonesia/medan/Medan_Barat/Bihun_Bebek_Kumango/16789840_472287439827395_5716682362390052864_n-m.jpg'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'Food_Images_API_Cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('^https://mjpancake.files.wordpress.com/2014/12/mj-pancake-durian.jpg'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'Food_Images_API_Cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('^https://cdn.idntimes.com/content-images/community/2019/12/74797333-542110323274286-8157494286295741274-n-b54ed79f2b1cd7e417c721f536a1d039.jpg'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'Food_Images_API_Cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('^https://s3.us-east-1.wasabisys.com/agendaindonesia/2020/11/Sate-Padang-shutterstock.jpg'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'Food_Images_API_Cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('^https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/11/02/3111261266.jpg'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'Food_Images_API_Cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('^https://images.genpi.co/uploads/data/images/Ririn/Talua%20cookpad.jpg'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'Food_Images_API_Cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('^https://www.holidify.com/images/cmsuploads/compressed/Grass_jelly_es_cincau_hijau_20190722150207.jpg'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'Food_Images_API_Cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    }),
  ],
};
