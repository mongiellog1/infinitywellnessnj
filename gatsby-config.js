const path = require("path");
require("dotenv").config();
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.infinitywellnessnj.com",
    title: "Infinity Wellness",
    subTitle: "Everything. Connects. Together.",
    socialMediaLinks: {
      instagram: "https://www.instagram.com/infinitywellnessnj/",
      facebook: "https://www.facebook.com/infinitywellnessnj/",
      youtube: "https://www.youtube.com/channel/UCtfOsb9dwrGnOaRvdJv52UA",
      soundcloud: "https://soundcloud.com/nuggets-that-move",
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
      services: "/services",
      mandalas: "/mandalas",
      about: "/about",
      shop: "/shop"
    },
    IWNJ_ADDRESS: isProd ? process.env.IWNJ_ADDRESS : process.env.__DEV__IWNJ_ADDRESS,
    SHOP_ADDRESS: isProd ? process.env.SHOP_ADDRESS : process.env.__DEV__SHOP_ADDRESS,
    SNIPCART_API_KEY: isProd ? process.env.SNIPCART_API_KEY : process.env.__DEV__SNIPCART_API_KEY
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
    // "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
