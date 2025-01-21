const path = require("path")

export const resolve = {
  fallback: {
    stream: require.resolve("stream-browserify"),
    crypto: require.resolve("crypto-browserify"),
    url: require.resolve("url-browserify"),
    https: require.resolve("https-browserify"),
    zlib: require.resolve("browserify-zlib"),
    util: require.resolve("util/"),
    path: require.resolve("path-browserify"),
    http: require.resolve("stream-http"),
    dns: require.resolve("dns"),
  },
}

module.exports = {
  devtool: false,
  module: {
    rules: [
      // ...
    ],
  },
}
