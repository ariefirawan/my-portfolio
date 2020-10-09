/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Full Stack Developer | Arief Irawan",
    description:
      "I’m a freelance Full Stack Developer specializing in Nodejs, React and Native in building a web interface with better user experiences.",
    author: "@ariefirawant",
    menuLinks: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Services",
        path: "/services/",
      },
      {
        name: "Blog",
        path: "/blog/",
      },
      {
        name: "Projects",
        path: "/projects",
      },
      {
        name: "Contact",
        path: "/contact/",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content`,
      },
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1080,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Arief Irawan",
        short_name: "Blog and Portfolio",
        start_url: "/",
        background_color: "#f73859",
        theme_color: "#f73859",
        display: "minimal-ui",
        icon: "src/images/ai.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-scroll-reveal",
      options: {
        // eslint-disable-next-line max-len
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
      },
    },
    // {
    //   resolve: "gatsby-alias-imports",
    //   options: {
    //     aliases: {
    //       components: 'src/components',
    //       containers: 'src/containers',
    //       images: 'src/images',
    //       json: 'src/json'
    //     }
    //   }
    // },
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: "Muli",
              variants: ["400", "500", "700"],
              // subsets: ['latin']
              // text: 'Hello'
              // fontDisplay: 'swap',
              // strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: true,
      },
    },
  ],
}
