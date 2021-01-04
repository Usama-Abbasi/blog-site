const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    plugins: [
      `gatsby-plugin-material-ui`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: "956zt4dkhphs",
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: "tt3W_vnDa2Epq9JF_nDCZWQ_FMTULma-nGQ7E01xFHg",
            },
          },
    ]
}