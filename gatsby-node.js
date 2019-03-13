const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    query {
      allPrismicPage {
        edges {
          node {
            uid
            data {
              heading {
                text
              }
              body {
                html
              }
            }
          }
        }
      }
    }
  `);

  pages.data.allPrismicPage.edges.forEach(edge =>
    createPage({
      path: '/' + edge.node.uid,
      component: path.resolve('./src/templates/page.tsx'),
      context: {
        heading: edge.node.data.heading.text,
        body: edge.node.data.body.html,
      },
    }),
  );
};
