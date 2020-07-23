const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    app: './src/index.js',
    //vendor: '@okta/okta-signin-widget',
  },
  // performance: {
  //   hints: false
  // },
  //devtool: false,
  output: {
    // filename: 'main.js',
    // path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  // https://codeburst.io/basics-of-bundle-splitting-with-webpack-4-99a670ebfe48
  // https://survivejs.com/webpack/building/bundle-splitting/
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        }
      }
    }
  },
  resolve: {
    extensions: ['.js']
  },

  module:{
    rules:[
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: { limit: 10000 }
      }, {
        test: /\.(s*)css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          query: { presets: ['@babel/preset-env'] }
        },
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    //contentBase: './public',
    hot: true,
    compress: true,
    port: 8000,
    https: true,
    allowedHosts: ['localhost'],
    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,

      // Poll using interval (in ms, accepts boolean too)
      poll: 1000,
    },
    overlay: true,
  },
  plugins: [
    // Ignore node_modules so CPU usage with poll
    // watching drops significantly.
    new webpack.WatchIgnorePlugin([path.join(__dirname, 'node_modules')]),
  ],
};

module.exports = (env, argv) => {

  const isDev = argv.mode !== 'production';
  const devtool = { devtool: isDev ? 'inline-source-map' : false};

  return { ...config, ...devtool };
}

//module.exports = config;