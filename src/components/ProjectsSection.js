import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Project from './Project';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const Projects = (props) => {
  const { classes } = props;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const projects = ["Vacay Away", "Flappy Bernie", "Life Is Brewtiful", "PR Journal", "Ghibli CLI"].map((project, i) => <Project name={project}/>)

  return (
    <section className={classes.root} id="projects">
      <Container className={classes.container} data-aos="fade-left">
          <Grid container spacing={7} className={classes.grid}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center">Projects</Typography>
            </Grid>
            {projects}
          </Grid>
      </Container>
    </section>
  )
}

export default withStyles(styles)(Projects)