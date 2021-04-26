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
  navItem: {
    flexGrow: 1,
    marginLeft: theme.spacing(10),
  },
}));

const Navbar = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar} elevation={0}>
        <Toolbar>
        <Container>
          <Grid container>
            <Grid item xs={6} md={9} />
            <Grid item xs={6} md={3} >
              <Typography variant="body1" className={classes.navItem} color="textPrimary" display="inline">
                About
              </Typography>
              <Typography variant="body1" className={classes.navItem} color="textPrimary" display="inline">
                Projects
              </Typography>
              <Typography variant="body1" className={classes.navItem} color="textPrimary" display="inline">
                Resume
              </Typography>
              <Typography variant="body1" className={classes.navItem} color="textPrimary" display="inline">
                Contact
              </Typography>
            </Grid>  
            </Grid>
            </Container>
        </Toolbar>
       </AppBar>
    </div>
  );
}

export default Navbar;