import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Project from './Project';
import projectData from '../data/ProjectData.js'

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: "#29293d",
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
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

  const projectsArray = projectData
  console.log('projectsarray', projectsArray)
  const projects = projectsArray.map((project, i) => <Project key={i} name={project.name} description={project.description} image={project.image} languages={project.languages} />)

  console.log('projects', projects)
  

  return (
    <section className={classes.root} id="projects">
      <Container className={classes.container} data-aos="fade-left">
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" color="secondary">Projects</Typography>
            </Grid>
            {projects}
          </Grid>
      </Container>
    </section>
  )
}

export default withStyles(styles)(Projects)