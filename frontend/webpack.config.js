module.exports = {
  devServer: {
    proxy: {
      "/brand/api": {
        target: "http://127.0.0.1:8000/brand/api/",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
