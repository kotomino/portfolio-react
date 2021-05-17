import React from 'react'
import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import { red } from '@material-ui/core/colors';

const styles = (theme) => ({
  root: {
    // minHeight: 430,
    backgroundColor: "#33334d",
  },
  media: {
    margin: 0,
    height: "80%",
    width: "80%",
    paddingTop: '2%', // 16:9
    textAlign: 'center'
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    color: '#e0e0eb',
    textAlign: 'center',
  },
  hover: {
    '&:hover': {
      color: 'white',
      cursor: 'pointer'
   }
  },
  description: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  desc : {
    fontSize: "0.95rem",
    color: "#d1d1e0"
  },
  languages: {
    color: "#a3a3c2",
  }
})

const Project = (props) => {

  const { classes, name, description, languages, image, github, website, youtube } = props;

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
            src={image}
            component="img"
            title={name}
          />
          </div>
        <CardContent className={classes.description}>
          <Typography variant="body1" className={classes.desc} component="p" color="primary">
            {description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" className={classes.languages} align="center">
            {languages.map(language => language + " ")}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {github ? (
            <IconButton aria-label="github link" href={github} target='_blank'>
              <GitHubIcon color="primary" className={classes.hover} />
            </IconButton>
          ) : (
            <></>
          )}
          {website ? (
            <IconButton aria-label="website" href={website} target='_blank'>
              <LanguageIcon color="primary" className={classes.hover} />
            </IconButton>
          ) : (
            <></>
          )}
          {youtube ? (
            <IconButton aria-label="youtube" href={youtube} target='_blank'>
              <YouTubeIcon color="primary" className={classes.hover} />
            </IconButton>
          ) : (
            <></>
          )}
        </CardActions> 
        </Card>
      </Grid>
  )
}

export default withStyles(styles)(Project)
