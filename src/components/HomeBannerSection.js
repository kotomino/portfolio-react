import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import GirlImage from './GirlImage';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#29293d",
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(30),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  desc: {
    marginTop: 30
  },
  button: {
    marginTop: 150,
    marginLeft: 200
  },
  title: {
    marginLeft: theme.spacing(0),
  },
  hi: {
    marginLeft: -465
  }
})

const HomeBanner = (props) => {

  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
      <Grid item lg={6}>
        <Typography variant="h6" align="center" color="primary" className={classes.hi}>
          Hi, my name is
        </Typography>
        <Typography variant="h2" color="secondary">
          Kotomi Noguchi
        </Typography>
        <Typography variant="h4" color="textSecondary" className={classes.title}>
          Full Stack Software Engineer
        </Typography>
          <Typography color="primary" className={classes.desc}>
            I'm an Atlanta-based software engineer with a passion for making positive impact through technology. 
          </Typography>
          <Button variant="outlined" color="primary" className={classes.button} href="mailto:kotomi.noguchi@gmail.com">
          Get In Touch
        </Button>
        </Grid>
        <Grid item lg={6} sm={3}>
          <GirlImage />
        </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default withStyles(styles)(HomeBanner);
