import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FacebookIcon from "@material-ui/icons/Facebook"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import TwitterIcon from "@material-ui/icons/Twitter"

import "./footer.module.css"

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#00004b",
    color : "#fff"
  },
})

export default function LabelBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="navbottom" style = {{backgroundColor: "#00004b", padding : "1rem"}}>
    
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="twitter"
          value="twitter"
          href="https://twitter.com/UsamaAb00830353"
          icon={<TwitterIcon />}
        />
        <BottomNavigationAction
          label="usama999abbasi@gmail.com"
          value="email"
          icon={<EmailIcon />}
        />
        <BottomNavigationAction
          label="github"
          value="github"
          icon={<GitHubIcon />}
          href="https://github.com/Usama-Abbasi"
        />
        <BottomNavigationAction
          label="facebook"
          value="facebook"
          href="https://www.facebook.com/usama.abbasi.714655"
          icon={<FacebookIcon />}
        />
        
      </BottomNavigation>
      <h5 >
       © {new Date().getFullYear()}
      </h5>
     
    </div>
  )
}