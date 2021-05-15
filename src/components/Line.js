import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import line from '../assets/line.webp';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden', 
    width: "50%",
    height: "50%",
    marginTop: "27%",
    marginLeft: "7%"
  },
})

const Line = (props) => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <img
        src={line} 
        className={classes.image}
        alt="line"
      />
    </div>
  )
}

export default withStyles(styles)(Line)
