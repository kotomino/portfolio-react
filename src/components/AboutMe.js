import React, { useEffect } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import bricks from '../assets/bricks.png';
import { withStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#29293d",
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(30),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  desc: {
    marginTop: 10
  },
  aboutMe: {
    marginTop: 50
  }
})

const AboutMe = (props) => {
  const { classes } = props;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <section className={classes.root} id="about" >
      <Container className={classes.container} data-aos="fade-right">
        <Grid container spacing={10}>
          <Grid item md={6}>
            <img
              src={bricks} 
              className={classes.image}
              alt="blue"
            />
          </Grid>
          <Grid item md={5} align="center">
            <Typography variant="h4" color="secondary" className={classes.aboutMe} display="inline">
              01.&nbsp; 
            </Typography>
            <Typography variant="h4" color="primary" className={classes.aboutMe } display="inline">
              About Me
            </Typography>
            <Typography className={classes.desc} color="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
        
      </Container>
    </section>
  )
}

export default withStyles(styles)(AboutMe);