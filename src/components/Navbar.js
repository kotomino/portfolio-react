import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import resume from '../assets/Resume.pdf'
import { Link } from "react-scroll";
import { Button, Container, fade, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey.A400,
  },
  navbar: {
    backgroundColor: fade("#F0FFFF", 0),
  },
  navItem: {
    '&:hover': {
      color: 'white',
      cursor: 'pointer'
   }
  },
  button: {
    '&:hover': {
      color: 'white',
   }
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
                  <Typography variant="body1" className={classes.navItem} color="textPrimary" display="inline">
                    About
                  </Typography>
                </Link>
              </Grid>
              <Grid item s={2} md={1}>
                <Link to="projects" smooth={true} duration={1200}>
                  <Typography variant="body1" className={classes.navItem} color="textPrimary" display="inline">
                    Projects
                  </Typography>
                </Link>
              </Grid>
              <Grid item s={2} md={1}>
                <Link to="blogs" smooth={true} duration={1200}>
                  <Typography variant="body1" className={classes.navItem} color="textPrimary" display="inline">
                    Blogs
                  </Typography>
                </Link>
              </Grid>
              <Grid item s={2} md={1}>
                <Link to="contact" smooth={true} duration={1400}>
                  <Typography variant="body1" className={classes.navItem} color="textPrimary" display="inline">
                    Contact
                  </Typography>
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