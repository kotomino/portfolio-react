import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.grey.A400,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(30),
    marginBottom: theme.spacing(10),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  desc: {
    marginTop: 30
  },
  button: {
    marginTop: 170
  },
  title: {
    marginLeft: theme.spacing(-27),
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
        <Typography variant="h6" align="center" color="primary" className={classes.hi}>
          Hi, my name is
        </Typography>
        <Typography variant="h2" color="textSecondary">
          Kotomi Noguchi
        </Typography>
        <Typography variant="h4" color="secondary" className={classes.title}>
          Full Stack Software Engineer
        </Typography>
        <Grid item xs={12} sm={8} md={6} lg={6}>
          <Typography color="primary" className={classes.desc}>
            I'm an Atlanta-based software engineer with a passion for making positive impact through technology. 
          </Typography>
        </Grid>
        <Button variant="outlined" color="primary" className={classes.button}>
          Get In Touch
        </Button>
      </Container>
    </section>
  )
}

export default withStyles(styles)(HomeBanner);
