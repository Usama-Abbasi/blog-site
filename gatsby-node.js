const path=require('path');
exports.createPages=async ({actions,graphql}) => {
    const {createPage}=actions;
    const result=await  graphql(`
    query{
    allContentfulBlogPost {
        nodes {
          body {
            json
          }
          slug
          publisheddate(formatString: "DD MMMM,YYYY")
          title
          image {
            title
            fluid {
              src
            }
          }
        }
      }
    }
    `)
    console.log(JSON.stringify(result));
    result.data.allContentfulBlogPost.nodes.forEach((obj)=>{
        createPage({
            path:`/blog/${obj.slug}`,
            component:path.resolve('./src/template/post.tsx'),
            context:{
                itemDetails:obj
            }
        })
    })
}