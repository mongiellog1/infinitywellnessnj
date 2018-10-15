const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Infinity Wellness",
    subTitle: "Everything. Connects. Together.",
    socialMediaLinks: {
      instagram: "https://www.instagram.com/ginamongiello/",
      facebook: "https://www.facebook.com/infinitywellnessnj/",
      youtube: "https://www.youtube.com/channel/UCtfOsb9dwrGnOaRvdJv52UA",
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/logo--justin-porro.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
