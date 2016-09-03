module.exports = {
    entry: getEntry(),
    output: {
        publicPath: 'http://localhost:8080/',
        filename: './dist/bundle.js'
    },
    devtool: 'eval',
    module: {
        preLoaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {test: /(\.css)$/, loaders: ['style', 'css?sourceMap']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.ico$/, loader: "file"},
            {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},            
            {
                test: /\.scss$/,
                include: /src/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'babel',                  
                    'ts-loader'
                ]
            },
          {test: /\.(png|jpg)$/, exclude: /node_modules/, loader: "url-loader?limit=100000"}
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    }
};

function getEntry() {
  var entry = [];

  if (process.env.NODE_ENV !== 'production') { //only want hot reloading when in dev.
        entry.push('webpack-dev-server/client?http://localhost:8080');
        entry.push('webpack/hot/only-dev-server');
  }

  entry.push('./src/index');
  return entry;
};