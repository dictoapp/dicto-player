const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    // filename: "dist/[name].[contenthash].css",
    filename: "dist/[name].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
  entry: './src/Player',
  output: {
    filename: './dist/index.js',
    libraryExport: "default",
    library: 'dicto-player',
    libraryTarget: 'commonjs2'
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc. 
  externals: [nodeExternals()],
  module: {
    rules: [
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
          test: /\.scss$/,
          use: extractSass.extract({
                use: [{
                    loader: "css-loader",
                    // options: {
                    //   sourceMap: true
                    // }
                }, 
                {
                    loader: "sass-loader",
                    options: {
                      sourceMap: true
                    }
                }
                ],
                // use style-loader in development 
                fallback: "style-loader",
                publicPath: "../",
            })
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules\//,
        include: __dirname
      },
      {
          test: /\.(woff2?|ttf|otf|eot)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
              name: 'dist/[path][name].[ext]'
          }
      }
    ],
  },
  plugins: [
    extractSass
  ],
}

// var webpack = require('webpack');

// module.exports = {
//   module: {
//     loaders: [
//       {
//         test: /\.scss$/,
//         use: ['style-loader', 'css-loader', 'sass-loader']
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       { 
//         test: /\.(csv|gexf)$/, 
//         loader: 'raw-loader' 
//       },
//       {
//         test: /\.(jpe?g|png|gif|svg)$/i,
//         use: [
//             'file?hash=sha512&digest=hex&name=[hash].[ext]',
//             'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
//         ]
//       },
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify('production')
//       }
//     }),
//     // new webpack.optimize.UglifyJsPlugin()
//   ]
// };
