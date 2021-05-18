import React, { useEffect } from 'react'
import { Box, Container, Grid, Hidden, Typography } from '@material-ui/core'
import bricks from '../assets/bricks.png';
import { withStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#1f1f2e",
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  aboutMe: {
    marginTop: 10,
    marginBottom: 20
  },
  white: {
    color: "#e0e0eb"
  },
  image: {
    height: '95%',
    width: '95%'
  },
  desc: {
    marginTop: 15
  },

})

const AboutMe = (props) => {
  const { classes } = props;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <section className={classes.root} id="about" >
      <Container className={classes.container} data-aos="fade-right">
        <Grid container spacing={5}>
          <Hidden smDown >
            <Grid item md={6}>
              <img
                src={bricks} 
                className={classes.image}
                alt="blue"
              />
            </Grid>
          </Hidden>
          <Grid item md={6} align="center">
            <div className={classes.aboutMe} >
              <Typography variant="h5" color="secondary" display="inline">
                01.{' '}
              </Typography>
              <Typography variant="h5" className={classes.white} display="inline">
                About Me
              </Typography>
            </div>
            <Box textAlign='center'>
              <Grid container >
                <Grid item md={12} align="left" >
                  <Typography color="primary" align="left" display="inline">
                    Hello! My name is Kotomi and I enjoy developing things on the web. My time as a{' '} 
                  </Typography>
                  <Typography color="textSecondary" align="left" display="inline">
                    Technical Account Manager in e-commerce{' '}
                  </Typography>
                  <Typography color="primary" align="left" display="inline">
                  heightened my interest in programming; while witnessing developers magically creating features and resolving bugs, I became determined to be a part of that magic!
                  </Typography>
                </Grid>
                <Grid item md={12} align="left" className={classes.desc} >
                  <Typography color="primary" align="left" display="inline">
                    Here are some of the{' '} 
                  </Typography>
                  <Typography color="textSecondary" align="left" display="inline">
                    technologies{' '}
                  </Typography>
                  <Typography color="primary" align="left" display="inline">  
                    I've been working with recently:
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <br/>
            <Grid container>
              <Grid item xs={4} align="left">
                <Typography color="secondary" display="inline" variant="body2">
                  &#8227;{' '}
                </Typography>
                <Typography color="primary" display="inline" variant="body2">
                  JavaScript (ES6+) 
                </Typography>
                <br/>
                <Typography color="secondary" display="inline" variant="body2">
                  &#8227;{' '}
                </Typography>
                <Typography color="primary" display="inline" variant="body2">
                  React 
                </Typography>
                <br/>
                <Typography color="secondary" display="inline" variant="body2">
                  &#8227;{' '}
                </Typography>
                <Typography color="primary" display="inline" variant="body2">
                  Redux
                </Typography>
                <br/>
                <Typography color="secondary" display="inline" variant="body2">
                  &#8227;{' '}
                </Typography>
                <Typography color="primary" display="inline" variant="body2">
                  Node.js 
                </Typography>
              </Grid>
              <Grid item xs={5} align="left">
                <Typography color="secondary" display="inline" variant="body2">
                  &#8227;{' '}
                </Typography>
                <Typography color="primary" display="inline" variant="body2">
                  Ruby on Rails 
                </Typography>
                <br/>
                <Typography color="secondary" display="inline" variant="body2">
                  &#8227;{' '}
                </Typography>
                <Typography color="primary" display="inline" variant="body2">
                  HTML/CSS
                </Typography>
                <br/>
                <Typography color="secondary" display="inline" variant="body2">
                  &#8227;{' '}
                </Typography>
                <Typography color="primary" display="inline" variant="body2">
                  Material UI 
                </Typography>
                <br/> 
                <Typography color="secondary" display="inline" variant="body2">
                  &#8227;{' '}
                </Typography>
                <Typography color="primary" display="inline" variant="body2">
                  Bootstrap
                </Typography>
              </Grid>
            </Grid>
            <br/>
            <Typography color="primary" align="left" >
              When not coding you can find me rock climbing, watching anime, or hiking the Georgia mountains.
            </Typography>
          </Grid>
        </Grid>
        
      </Container>
    </section>
  )
}

export default withStyles(styles)(AboutMe);