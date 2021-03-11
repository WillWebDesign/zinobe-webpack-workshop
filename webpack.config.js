const path = require("path");

module.exports = {
  entry: "./src/title.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      // Here we can define/override module loading rules
      {
        test: /\.jpg$/,
        use: ["file-loader"]
      }
    ]
  }
};
