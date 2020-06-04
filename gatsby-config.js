module.exports = {
  siteMetadata: {
    title: `Studio 5ml - UI/UX Designer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: 'https://notion-api.splitbee.io/v1/table/1b9b6c284ab14a858fd8ab36585234c0',
        rootKey: 'case',
        schemas: {
          case: `
            id: String
            coverImage: String
            backgroundColor: String
            name: String
            URL: String
            type: [ String ]
            role: [ String ]
          `,
        },
      },
    },
  ],
};
