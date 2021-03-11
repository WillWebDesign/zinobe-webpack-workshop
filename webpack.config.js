const path = require("path");

module.exports = {
  entry: "./src/title.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
