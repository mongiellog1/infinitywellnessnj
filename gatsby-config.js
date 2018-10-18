const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Infinity Wellness",
    subTitle: "Everything. Connects. Together.",
    socialMediaLinks: {
      instagram: "https://www.instagram.com/ginamongiello/",
      facebook: "https://www.facebook.com/infinitywellnessnj/",
      youtube: "https://www.youtube.com/channel/UCtfOsb9dwrGnOaRvdJv52UA",
    },
    contactFormUrl: "https://ginas-form-server.herokuapp.com/api/emailForm",
    internalRoutes: {
      healingTools: "/healing-tools",
      myofascialRelease: "/myofascial-release",
      emotionalFreedomTechniques: "/emotional-freedom-techniques",
      yogaMeditation: "/yoga-meditation",
      soundBathingGratitude: "/sound-bathing-gratitude",
      packages: "/packages",
      basicPackage: "/packages#basic-package",
      transformationPackage: "/packages#transformation-package",
      innerDivineMotheringPackage: "/packages#inner-divine-mothering-package",
      purchases: "/pay",
      mandalas: "/mandalas",
      about: "/about"
    }
  },
  plugins: [
    "gatsby-plugin-sass",
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
