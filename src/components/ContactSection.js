import React, { useEffect } from 'react'
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { useForm, ValidationError } from '@formspree/react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#29293d",
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(30),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: theme.palette.error.light
  },
  blue: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -160,
    opacity: 1,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 30,
    padding: 10,
    width: 500
  },
  textField: {
    color: '#C8C8C8'
  },
  white: {
    color: "#e0e0eb"
  },
  button: {
    color: 'white',
    '&:hover': {
      color: '#248f8f',
    }
  }
})

const Contact = (props) => {
  const { classes } = props;

  const [state, handleSubmit] = useForm("xknkonle");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <section className={classes.root} id="contact">
      <Container className={classes.container} data-aos="fade-left">
        <div className={classes.blogs} >
          <Typography variant="h5" color="secondary" display="inline">
            04.{' '} 
          </Typography>
          <Typography variant="h5" className={classes.white} display="inline">
            What's Next?
          </Typography>
        </div>
        <Typography variant="h3" color="textSecondary">
          Get In Touch
        </Typography>
        <Grid item md={5} sm={7} xs={11}>
          <Typography color="primary">
            My inbox is always open for new opportunities and connections. Feel free to reach out any time!
          </Typography>
        </Grid>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={3} align="center">
            <Grid item xs={12}>
                <TextField
                  id="name"
                  label="Your Name"
                  name="name"
                  fullWidth
                  variant="filled" 
                  InputProps={{
                    className: classes.textField
                  }}
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />
              </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Your Email"
                name="email"
                fullWidth
                variant="filled"
                InputProps={{
                  className: classes.textField
                }}
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </Grid>
            <Grid item item xs={12}>
              <TextField
                id="message"
                variant="filled"
                label="Your Message"
                multiline
                fullWidth
                rows={8}
                defaultValue="Type your message here..."
                InputProps={{
                  className: classes.textField
                }}
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </Grid>
            <Grid item item xs={12}>
              <Button 
                type="submit" 
                variant="outlined" 
                color="secondary" 
                className={classes.button}
                >Submit
              </Button>
            </Grid>
          </Grid>
        </form>

      </Container>
    </section>
  )
}

export default withStyles(styles)(Contact);