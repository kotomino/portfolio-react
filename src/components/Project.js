import React from 'react'
import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';

const styles = (theme) => ({
  root: {
    minWidth: 270,
    minHeight: 540,
    backgroundColor: "#33334d",
  },
  media: {
    margin: 0,
    height: "80%",
    width: "80%",
    paddingTop: '2%', // 16:9
    textAlign: 'center'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center'
  },
  hover: {
    '&:hover': {
      color: 'white',
      cursor: 'pointer'
   }
  },
  description: {
    marginLeft: '5%',
    marginRight: '5%'
  }
})

const Project = (props) => {

  const { classes, name, description, languages, image } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Grid item xs={12} md={6} lg={4}>
        <Card container className={classes.root} elevation={10} >
          <CardHeader
          classes={{
            title: classes.title,
          }}
          title={props.name}
        />
        <div style={{ display:'flex', justifyContent:'center' }}>
          <CardMedia
            className={classes.media}
            // style={{ width: 550, height: 400, paddingTop: '5%'}}
            src={image}
            component="img"
            title={name}
          />
          </div>
        <CardContent className={classes.description}>
          <Typography variant="body2" component="p" color="primary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="github link">
            <GitHubIcon color="primary" className={classes.hover} />
          </IconButton>
          <IconButton aria-label="website">
            <LanguageIcon color="primary" className={classes.hover} />
          </IconButton>
          <IconButton aria-label="youtube">
            <YouTubeIcon color="primary" className={classes.hover} />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions> 
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography color="primary" paragraph>
              {languages}
            </Typography>
          </CardContent>
        </Collapse>
        </Card>
      </Grid>
  )
}

export default withStyles(styles)(Project)
