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
    backgroundColor: "#1f1f2e",
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  white: {
    color: "#e0e0eb"
  },
  // projects: {
  //   marginRight: '8%'
  // }
  center: {
    alignItems: "center"
  }
})

const Projects = (props) => {
  const { classes } = props;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const projectsArray = projectData
  // console.log('projectsarray', projectsArray)
  const projects = projectsArray.map((project, i) => <Project key={i} name={project.name} description={project.description} image={project.image} languages={project.languages} github={project.github} youtube={project.youtube} website={project.website} />)

  // console.log('projects', projects)
  

  return (
    <section className={classes.root} id="projects">
      <Container className={classes.container} data-aos="fade-right">
          <Grid container spacing={5}>
              <Grid item xs={12} align="center">
                <div className={classes.projects} >
                  <Typography variant="h5" color="secondary" display="inline">
                    03.{' '} 
                  </Typography>
                  <Typography variant="h5" className={classes.white} display="inline">
                    Projects
                  </Typography>
                </div>
              </Grid>
            {projects}
          </Grid>
      </Container>
    </section>
  )
}

export default withStyles(styles)(Projects)