module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(less)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.less$/,
        use: ["babel-loader", "raw-loader", "less-loader"]
      }
    );
    return config;
  }
};