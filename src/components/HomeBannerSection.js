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
    marginTop: theme.spacing(25),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  desc: {
    marginTop: 30,
    marginLeft: "1%",
    marginRight: "1%"
  },
  button: {
    marginTop: "15%",
    marginLeft: "38%",
    color: theme.palette.common.white
  },
  title: {
    marginLeft: "1%",
  },
  hi: {
    marginLeft: "-75%", 
    color: theme.palette.common.white
  },
  image: {
    width: "70%"
  },
  text: {
    marginLeft: "1%"
  }
})

const HomeBanner = (props) => {

  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
      <Grid item md={6} xs={12} >
        <Typography variant="h6" align="center" className={classes.hi}>
          Hi, my name is
        </Typography>
        <Typography variant="h2" color="secondary" className={classes.text}>
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
        <Grid item md={6} xs={12} className={classes.image}>
          <GirlImage />
        </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default withStyles(styles)(HomeBanner);
