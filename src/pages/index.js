import * as React from "react"
import { Grid ,makeStyles,createStyles,Theme,Button} from '@material-ui/core';
import Layout from '..//component/layout';
import work from '..//images/work.gif';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '22px'
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    topRight:{
        fontSize:'56px',
        margin:'200px 0 50px',
        textAlign:'center',
        color:'#003A7B'
    },
    topAnimation :{
        marginTop: '70px'
    }

  }),
);

const IndexPage = () => {
  const classes=useStyles();
  return (
    <Layout>
      <div>
        <Grid container className={classes.root}>
          <Grid container xs={12}>
            <Grid item xs={12} md={7}>
              <img className={classes.topAnimation} src={work} alt="Gatsby Blogs" />
            </Grid>
            <Grid item xs={12} md={5} >
              <h1 className={classes.topRight}>
                Gatsby Blogs <br />by Usama Abbasi
                <br />
              </h1>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default IndexPage
