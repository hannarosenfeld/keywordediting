module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter, Dimension Design, coded by @AppSeed.us',
    author: 'Hunter Chang',
    description:
      'A Gatsby.js Starter, Designed by HTML5 UP, Coded by @AppSeed.us',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': ['X-Frame-Options: ALLOW-FROM http://keywordediting.com/'],
        },
        mergeSecurityHeaders: false,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
  ],
}
