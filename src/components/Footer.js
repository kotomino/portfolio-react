import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#29293d",
    overflow: 'hidden',
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

const Footer = (props) => {

  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography color="primary">
         Footer
        </Typography>
      </Container>
    </section>
  )
}

export default withStyles(styles)(Footer);
