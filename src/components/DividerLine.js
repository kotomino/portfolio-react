import React from 'react'
import line from '../assets/line.png';
import orangeline from '../assets/orangeline.png';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const styles = (theme) => ({
  image: {
    height: 120,
    alignItems: 'center',
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.grey.A400,
  }
})

const DividerLine = (props) => {

  const { classes } = props;

  return (
    <Container align="center">
      <img src={orangeline} className={classes.image} />
    </Container>
  )
}

export default withStyles(styles)(DividerLine);
