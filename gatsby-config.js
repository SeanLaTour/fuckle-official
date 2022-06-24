module.exports = {
  siteMetadata: {
    title: `fuckle`,
    siteUrl: `https://www.fucklegame.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-10Y98CWLX7"
         ],

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
  
       
        },
      },
    },
  
  ],
};
