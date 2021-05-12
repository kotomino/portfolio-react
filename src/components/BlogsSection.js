import React, { useEffect } from 'react'
import Slider from './Slider';
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: "#29293d",
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
  text: {
    marginTop: 200
  },
  white: {
    color: theme.palette.common.white
  }
})

const Blogs = (props) => {
  const { classes } = props;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <section className={classes.root} id="blogs">
      <Container className={classes.container} data-aos="fade-right">
        <Grid container spacing={5}>
          <Grid item xs={12} align="center">
            <div className={classes.project} >
              <Typography variant="h4" color="secondary" display="inline">
                03.{' '} 
              </Typography>
              <Typography variant="h4" className={classes.white} display="inline">
                Blogs
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Slider />
          </Grid>
          <Grid item xs={6} >
            <div className={classes.text}>
              <Typography variant="h3" align="center" color="textSecondary" display="inline">
                Explore{' '} 
              </Typography>
              <Typography variant="h3" color="primary" display="inline">
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    'My Projects',
                    1000,
                    'Code',
                    1000,
                    'My Story',
                    1000,
                    'Bootcamp Life',
                    1000
                  ]}
                  />
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default withStyles(styles)(Blogs)