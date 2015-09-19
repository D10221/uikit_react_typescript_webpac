module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: 'built/main.js'
  },
    // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'ractive' }      
    ]
  }
}