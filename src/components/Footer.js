import React from 'react'
import { Container, Grid, IconButton, Typography } from '@material-ui/core'
import { Link } from "react-scroll";
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#29293d",
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  middle: {
    marginTop: 100
  },
  // right: {
  //   marginTop: 30
  // },
  linkItem: {
    '&:hover': {
      color: 'white',
      cursor: 'pointer'
   }
  },
  iconItem: {
    "&:hover": {
        color: 'white',
    }
},
})

const Footer = (props) => {

  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={4} align="center">
            <div className={classes.left}>
              <Typography color="textSecondary" variant="h6">
                GET IN TOUCH
              </Typography>
              <Typography color="primary">
                kotomi.noguchi@gmail.com
              </Typography>
              <IconButton aria-label="github link">
                <GitHubIcon color="primary" className={classes.iconItem} />
              </IconButton>
              <IconButton aria-label="github link">
                <LinkedInIcon color="primary" className={classes.iconItem}/>
              </IconButton>
              <IconButton aria-label="website">
                <InstagramIcon color="primary" className={classes.iconItem}/>
              </IconButton>
              <IconButton aria-label="youtube">
                <YouTubeIcon color="primary" className={classes.iconItem}/>
               </IconButton>
               <IconButton aria-label="youtube">
                <EmailIcon color="primary" className={classes.iconItem}/>
               </IconButton>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.middle} align="center">
              <Typography color="primary">
                Designed and Built by Kotomi Noguchi
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4} align="center">
            <div className={classes.right}>
              <Typography color="textSecondary" variant="h6">
                LINKS
              </Typography>
              <Link to="about" smooth={true} duration={1200}>
                <Typography color="primary" display="inline" className={classes.linkItem}>
                  About{' '}
                </Typography>
              </Link>
              <Typography color="primary" display="inline" >
                |{' '}
              </Typography>
              <Link to="projects" smooth={true} duration={1200}>
                <Typography color="primary" display="inline" className={classes.linkItem}>
                  Projects{' '}
                </Typography>
              </Link>
              <Typography color="primary" display="inline" >
                |{' '}
              </Typography>
              <Link to="blogs" smooth={true} duration={1200}>
                <Typography color="primary" display="inline" className={classes.linkItem}>
                  Blogs{' '}
                </Typography>
              </Link>
              <Typography color="primary" display="inline" >
                |{' '}
              </Typography>
              <Link to="contact" smooth={true} duration={600}>
                <Typography color="primary" display="inline" className={classes.linkItem}>
                  Contact
                </Typography>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default withStyles(styles)(Footer);
