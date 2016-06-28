var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    'patient_detail': path.join(process.cwd(), 'shared/components/patient/detail'),
    'list_appt':path.join(process.cwd(), 'shared/components/appointment/list_appt'),
    'read_appt':path.join(process.cwd(), 'shared/components/appointment/read_appt'),
    'create_appt':path.join(process.cwd(), 'shared/components/appointment/create_appt'),
    // 'request_page': path.join(process.cwd(), 'shared/components/request/request'),
    // 'helper_page': path.join(process.cwd(), 'shared/components/helper/helper'),
    // 'checkorder_page': path.join(process.cwd(), 'shared/components/checkorder/checkorder')
  },
  output: {
    path: './public/',
    publicPath: '/public/',
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel'
      },
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  resolve: {
    /*alias: {
        'react': 'react-lite',
        'react-dom': 'react-lite'
    },*/
    root: [
      path.join(process.cwd(), 'shared')
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   comments: false,
    //   sourceMap: false,
    //   mangle: true,
    //   minimize: true
    // })
  ]
}