module.exports = {
  siteMetadata: {
    title: `Studio 5ml - UI/UX Designer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/5ml/1b9b6c284ab14a858fd8ab36585234c0',
            cacheType: 'html',
          },
        ],
      },
    },
  ],
};
