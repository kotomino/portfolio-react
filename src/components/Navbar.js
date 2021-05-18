import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import resume from '../assets/Resume.pdf'
import { Link } from "react-scroll";
import { Button, Container, fade, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#1f1f2e",
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navbar: {
    backgroundColor: fade("#F0FFFF", 0),
  },
  navItem: {
    color: "#d1d1e0",
    '&:hover': {
      color: '#248f8f',
      cursor: 'pointer'
   },
   marginRight: "4%"
  },
  button: {
    color: 'white',
    '&:hover': {
      color: '#248f8f',
   },
  }
}));

const Navbar = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar} elevation={0}>
        <Toolbar>
          <Container className={classes.container}>
            <Grid container spacing={1}>
              <Grid item xs={false} sm={false} md={5} lg={7} xl={7} />
              <Grid item xs={12} sm={12} md={7} lg={5} xl={5} align="right">
                <Link to="about" smooth={true} duration={600}>
                    <Typography variant="body2" color="secondary" display="inline" >
                      01.{' '}
                    </Typography>
                    <Typography variant="body2" className={classes.navItem} color="primary" display="inline">
                      About
                    </Typography>
                    
                </Link>
                
                <Link to="blogs" smooth={true} duration={1200}>
                
                    <Typography variant="body2" color="secondary" display="inline">
                      02.{' '}
                    </Typography>
                    <Typography variant="body2" className={classes.navItem} color="primary" display="inline">
                      Blogs
                    </Typography>
                  
                </Link>
                <Link to="projects" smooth={true} duration={1200} className={classes.navItem}>
                  
                    <Typography variant="body2" color="secondary" display="inline">
                      03.{' '}
                    </Typography>
                    <Typography variant="body2" className={classes.navItem} display="inline">
                      Projects
                    </Typography>
                  
                </Link>
                <Link to="contact" smooth={true} duration={1400}>
                  
                    <Typography variant="body2" color="secondary" display="inline">
                      04.{' '}
                    </Typography>
                    <Typography variant="body2" className={classes.navItem} color="primary" display="inline">
                    Contact
                    </Typography>
                  
                </Link>
                <Button href={resume} target='_blank' className={classes.button} variant="outlined" color="secondary">
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