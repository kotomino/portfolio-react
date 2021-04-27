import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(40),
    marginBottom: theme.spacing(40),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  blue: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -160,
    opacity: 1,
  },
})

const Blogs = (props) => {
  const { classes } = props;

  return (
    <section className={classes.root} id="blogs">
      <Container className={classes.container}>
        Blogs
      </Container>
    </section>
  )
}

export default withStyles(styles)(Blogs)