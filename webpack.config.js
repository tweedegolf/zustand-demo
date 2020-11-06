/* eslint @typescript-eslint/no-var-requires: 0 */

const path = require("path");

module.exports = {
  // entry: path.join(__dirname, "src", "index.tsx"),
  entry: {
    // 'song_operations/save_song/': './song_operations/save_song/main.js',
    // 'audio/add_audio_events/': './audio/add_audio_events/main.js',
    // 'audio/add_audio_events_simple/': './audio/add_audio_events_simple/main.js',
    // 'process_event/process_event_array/': './process_event/process_event_array/main.js',
    // 'process_event/process_event_per_event/': './process_event/process_event_array/main.js',
    // 'miscellaneous/musicxml/': './miscellaneous/musicxml/main.js',
    // 'midi_in_&_out/midi_out_file/': './midi_in_&_out/midi_out_file/main.js',
    "src/v1/": "./src/v1/index.tsx",
    "src/v2/": "./src/v2/index.tsx",
    "src/v3/": "./src/v3/index.tsx",
    "src/v4/": "./src/v4/index.tsx",
    "src/v5/": "./src/v5/index.tsx",
    "src/v6/": "./src/v6/index.tsx",
  },

  devtool: "inline-source-map",
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    // modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // "css-modules-typescript-loader",
          // {
          //   loader: "css-loader",
          //   options: {
          //     modules: true,
          //   },
          // },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            onlyCompileBundledFiles: true,
          },
        },
      },
      {
        test: /\.(jpg|jpeg|gif|png|eot|woff|woff2|ttf|svg|ico)$/,
        loader: "file-loader?name=[name].[ext]",
      },

      // {
      //   test: /\.svg$/,
      //   use: {
      //     loader: "svg-inline-loader",
      //     options: {
      //       publicPath: "/",
      //     },
      //   },
      // },
    ],
  },
  // output: {
  //   filename: "bundle.js",
  //   path: path.resolve(__dirname, "dist"),
  // },
  output: {
    path: path.resolve(__dirname),
    filename: "[name]bundle.js",
  },
  watch: true,
  // devServer: {
  //   contentBase: path.join(__dirname),
  //   compress: true,
  //   port: 9000,
  //   hot: false,
  //   inline: false,
  //   liveReload: false,
  // },
};
