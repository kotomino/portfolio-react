import React, { useEffect } from 'react'
import Slider from './Slider';
import { withStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Grid, Hidden, Typography } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: "#1f1f2e",
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
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
    marginTop: 150,
    marginLeft: '0%'
  },
  white: {
    color: "#e0e0eb"
  },
  purple: {
    color: "#c2c2d6"
  },
  button: {
    marginTop: "8%",
    color: 'white',
    '&:hover': {
      color: '#248f8f',
   },
  },
})

const Blogs = (props) => {
  const { classes } = props;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <section className={classes.root} id="blogs">
      <Container className={classes.container} data-aos="fade-left">
        <Grid container spacing={5}>
          <Grid item xs={12} align="center">
            <div className={classes.blogs} >
              <Typography variant="h5" color="secondary" display="inline">
                02.{' '} 
              </Typography>
              <Typography variant="h5" className={classes.white} display="inline">
                Blogs
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Slider />
          </Grid>
          
          <Grid item xs={12} md={6}>
          <Hidden smDown>
            <div className={classes.text}>
              <Typography variant="h3" align="center" color="textSecondary" display="inline">
                Explore{' '} 
              </Typography>
              <Typography variant="h3" className={classes.purple} display="inline">
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    'My Projects',
                    1500,
                    'Bootcamp Life',
                    1500,
                    'My Story',
                    1500,
                    'My Code',
                    1500
                  ]}
                  />
              </Typography>
            </div>
            </Hidden>
            <Box align="center">
              <Button variant="outlined" color="secondary" className={classes.button} target='_blank' href="https://kotomi-noguchi.medium.com/">
                View Blogs
              </Button>
            </Box>
          </Grid>
          <Grid item>
            
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default withStyles(styles)(Blogs)