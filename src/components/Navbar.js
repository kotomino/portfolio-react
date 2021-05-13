import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import resume from '../assets/Resume.pdf'
import { Link } from "react-scroll";
import { Button, Container, fade, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#29293d",
  },
  navbar: {
    backgroundColor: fade("#F0FFFF", 0),
  },
  navItem: {
    '&:hover': {
      color: 'black',
      cursor: 'pointer'
   },
  },
  button: {
    '&:hover': {
      color: 'white',
   },
  },
  white: {
    color: theme.palette.common.white
  }
}));

const Navbar = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar} elevation={0}>
        <Toolbar>
          <Container>
            <Grid container spacing={1}>
              <Grid item s={2} md={7} />
              <Grid item s={2} md={1}>
                <Link to="about" smooth={true} duration={600}>
                  <div className={classes.navItem}>
                    <Typography variant="body2" color="secondary" display="inline" >
                      01.{' '}
                    </Typography>
                    <Typography variant="body2" className={classes.white} color="primary" display="inline">
                      About
                    </Typography>
                    </div>
                </Link>
                
              </Grid>
              <Grid item s={2} md={1}>
                <Link to="blogs" smooth={true} duration={1200}>
                  <div className={classes.navItem}>
                    <Typography variant="body2" color="secondary" display="inline">
                      02.{' '}
                    </Typography>
                    <Typography variant="body2" className={classes.white} color="primary" display="inline">
                      &nbsp;Blogs
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid item s={2} md={1}>
                <Link to="projects" smooth={true} duration={1200} className={classes.navItem}>
                  <div className={classes.navItem}>
                    <Typography variant="body2" color="secondary" display="inline">
                      03.{' '}
                    </Typography>
                    <Typography variant="body2" className={classes.white} display="inline">
                      Projects
                    </Typography>
                  </div>
                </Link>
              </Grid>
              
              <Grid item s={2} md={1}>
                <Link to="contact" smooth={true} duration={1400}>
                  <div className={classes.navItem}>
                    <Typography variant="body2" color="secondary" display="inline">
                      04.{' '}
                    </Typography>
                    <Typography variant="body2" className={classes.white} color="primary" display="inline">
                    Contact
                    </Typography>
                  </div>
                </Link>
              </Grid>
              <Grid item s={2} md={1}>
                <Button color="inherit" href={resume} target='_blank' className={classes.button} variant="outlined" color="secondary">
                  Resume
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;