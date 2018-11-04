const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
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

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions
//
//   const productTemplate = path.resolve(`src/templates/product.jsx`);
//
//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               name
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }
//
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: `/shop/products/${node.frontmatter.name}`,
//         component: productTemplate,
//         context: {}, // additional data can be passed via context
//       })
//     })
//   })
// }
