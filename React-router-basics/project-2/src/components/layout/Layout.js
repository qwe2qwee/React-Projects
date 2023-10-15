import { Fragment } from "react"
import classes from "./Layout.module.css"
import MainNavivation from "./MainNavigation"

const Layout = (props)=> {
  return <Fragment>
    <MainNavivation/>
    <main className={classes.main}>{props.children}</main>
  </Fragment>
}

export default Layout