module.exports = {
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  externals: {
    "react": "React",
    "jquery": "jQuery",
    "window": "window",
  },
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: false,
    failOnError: false // Must not fail on error for webpack --watch to work
  }
};
