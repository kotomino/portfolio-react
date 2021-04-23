import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Button, Container, fade, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: fade("#F0FFFF", 0),
  },
  firstItem: {
    marginLeft: theme.spacing(2),
    flexGrow: 1
  },
  navItem: {
    flexGrow: 1,
  },
}));

const Navbar = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar} elevation={0}>
        <Toolbar>
        
          <Grid container>
            <Grid item xs={8} />
            <Grid item xs={1}>
              <Typography variant="h6" className={classes.firstItem} color="textPrimary" >
                About
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6" className={classes.navItem} color="textPrimary" >
                Projects
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6" className={classes.navItem} color="textPrimary" >
                Resume
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6" className={classes.navItem} color="textPrimary" >
                Contact
              </Typography>
            </Grid>  
            </Grid>
             
        </Toolbar>
       </AppBar>
    </div>
  );
}

export default Navbar;