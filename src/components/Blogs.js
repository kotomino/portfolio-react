import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <section className={classes.root} id="blogs">
      <Container className={classes.container} data-aos="fade-right">
        Blogs
      </Container>
    </section>
  )
}

export default withStyles(styles)(Blogs)