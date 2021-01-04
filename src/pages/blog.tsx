import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '..//component/layout'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Typography from '@material-ui/core/Typography';
import { navigate } from 'gatsby';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    root1: {
        maxWidth: 1300,
        marginLeft: '20px'
    },
    media: {
        height: 500,
    },
}));

export default function Blog() {
    const data = useStaticQuery(
        graphql`
        query{
        allContentfulBlogPost {
            nodes {
              body {
                raw
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
        `
    )
    const result = data.allContentfulBlogPost.nodes;
    const classes = useStyles();
    return (
        <Layout>
            <div className={classes.root}>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        {result.map((post, index) => {
                            return (
                                <Card className={classes.root1} style={{ marginTop: '20px' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={post.image.fluid.src}
                                            title={post.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {post.title}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="h6">
                                                {post.publisheddate}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={() => navigate(post.slug)}>
                                            Read More
                                     </Button>
                                    </CardActions>

                                </Card>
                            )
                        })}


                    </Grid>


                </Grid>
            </div>
        </Layout>
    )
}
