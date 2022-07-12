module.exports = {
  siteMetadata: {
    title: `Fuckle`,
    description:
      "Fuckle is a word game with only your favorite four letter cuss words! Go Fuckle yourself today!",
    url: `https://www.fucklegame.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-10Y98CWLX7"],

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};
