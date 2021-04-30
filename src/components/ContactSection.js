import React, { useEffect } from 'react'
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { useForm, ValidationError } from '@formspree/react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.grey.A400,
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
    color: '#FFFFFF'
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
        <Typography variant="h6" color="textSecondary" align="center">
          What's Next?
        </Typography>
        <Typography variant="h3" color="secondary">
          Get In Touch
        </Typography>
        <Grid item md={6}>
          <Typography color="primary">
            My inbox is always open for new opportunities and connections. Whether you have a question or just want to say hello, I'll try my best to get back to you!
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
                // disabled={state.submitting}
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