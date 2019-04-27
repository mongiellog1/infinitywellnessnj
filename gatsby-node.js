const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "cheap-module-source-map",
    module: {
      rules: [{
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: []
      }]
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
      },

    },
  });
};
