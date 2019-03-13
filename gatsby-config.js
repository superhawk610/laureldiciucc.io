module.exports = {
  siteMetadata: {
    title: 'laureldiciuccio',
    url: 'http://localhost:8000',
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'laureldiciuccio',
        // FIXME: pull this from the environment
        accessToken:
          'MC5YSWtRLVJFQUFILXBCV1pR.Wu-_ve-_ve-_ve-_ve-_vUpJVe-_ve-_ve-_ve-_ve-_ve-_vV_vv73vv702Yh_vv70e77-977-977-9KO-_vRrvv70x77-9',
        // linkResolver: ({ node, key, value }) => doc => {
        //   // your link resolver
        // },
        // fetchLinks: [
        //   // links to be provided to linkResolver
        // ],
        // htmlSerializer: ({ node, key, value }) => (
        //   type,
        //   element,
        //   content,
        //   children,
        // ) => {
        //   // your html serializer
        // },
        // shouldNormalizeImage: ({ node, key, value }) => {
        //   // return true to normalize, false to skip (default: true)
        // },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-favicon',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src`,
      },
    },
  ],
};
