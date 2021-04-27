import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import bricks from '../assets/bricks.png';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(40),
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

  return (
    <section className={classes.root} id="about">
      <Container className={classes.container}>
        <Grid container spacing={10}>
          <Grid item md={6} >
            <img
              src={bricks} 
              className={classes.image}
              alt="blue"
            />
          </Grid>
          <Grid item md={5} >
            <Typography variant="h4" color="textSecondary" align="center" className={classes.aboutMe}>
              About Me
            </Typography>
            <Typography className={classes.desc} color="textPrimary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
        
      </Container>
    </section>
  )
}

export default withStyles(styles)(AboutMe);