import { Hidden, makeStyles } from '@material-ui/core';
import React from 'react'
import Footer from './Footer';
import MobileNav from './MobileNav';
import Navbar from './Navbar';

const useStyles = makeStyles({
  page: {
    width: '100%', 
  }
})

const Layout = ({ children }) => {

  const classes = useStyles();
  
  return (
    <div>
      <Hidden smDown>
        <Navbar />
      </Hidden>
      <div className={classes.page}>
        { children }
      </div>
      <Footer/>
      <MobileNav/>
    </div>
  )
}

export default Layout