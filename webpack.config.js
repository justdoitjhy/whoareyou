const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(scss)$/,
        // Webpack은 config파일에서, 아래에서 위로 실행을 한다
        use: [
          {
            loader: ExtractCSS.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer", { overrideBrowserslist: "cover 99.5%" }],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  // entry : 파일이 어디에서 왔는가
  entry: ["@babel/polyfill", ENTRY_FILE],
  // output : 파일을 어디에 넣을 것인가 ?
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  plugins: [
    new ExtractCSS({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
    }),
  ],
};

module.exports = config;
