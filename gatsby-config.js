const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '956zt4dkhphs',
        accessToken: "tt3W_vnDa2Epq9JF_nDCZWQ_FMTULma-nGQ7E01xFHg",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.apiKey,
          authDomain: process.env.authDomain,
          databaseURL: process.env.databaseURL,
          projectId: process.env.projectId,
          storageBucket: process.env.storageBucket,
          messagingSenderId: process.env.messagingSenderId,
          appId: process.env.appId
        }
      }
    }
  ]
}