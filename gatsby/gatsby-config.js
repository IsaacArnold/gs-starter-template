// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

// const { siteMetadata } = require("../../my-hello-world-starter/gatsby-config");
const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
  ],
  siteMetadata: {
    title: "Template Site",
    titleTemplate: "%s | Template Site",
    description:
      "This is a template site that can be filled with your information",
    url: "https://www.testsite.com", // No trailing slash allowed!
    image: "./static/Saly-10.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@testsite",
  },
};
