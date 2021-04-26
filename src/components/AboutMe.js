import { Container } from '@material-ui/core'
import React from 'react'
import blueImage from '../assets/blue.png';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  blue: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -160,
    opacity: 0.9,
  },
})

const AboutMe = (props) => {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={blueImage} 
          className={classes.blue}
          alt="blue"
        />
      </Container>
    </section>
  )
}

export default withStyles(styles)(AboutMe);