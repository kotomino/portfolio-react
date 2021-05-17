import React, { useEffect, useState } from 'react'
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
    color: '#b3b3cc'
  },
  white: {
    color: "#e0e0eb"
  },
  button: {
    color: 'white',
    '&:hover': {
      color: '#248f8f',
    }
  },
  thanks: {
    marginTop: 40,
    color: "#d1d1e0"
  }
})

const Contact = (props) => {
  const { classes } = props;

  const [state, handleSubmit] = useForm("xknkonle");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    switch(e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;

    }
      
    
    
    
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  if (state.succeeded) {
      return (
      <section className={classes.root} id="contact">
        <Container className={classes.container}>
          <Typography variant="h5" color="secondary" display="inline">
            04.{' '} 
          </Typography>
          <Typography variant="h5" className={classes.white} display="inline">
            What's Next?
          </Typography>
          <Typography variant="h3" color="textSecondary">
            Get In Touch
          </Typography>
          <Typography className={classes.thanks}>
            Thanks for reaching out! I'll try to get back to you ASAP.
          </Typography>
        </Container>
      </section>
      )
  }

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
          <Typography color="primary" className={classes.thanks}>
            My inbox is always open for new opportunities and connections. Feel free to reach out any time!
          </Typography>
        </Grid>
        <form className={classes.form} onSubmit={handleSubmit}>
          < Grid container spacing={3} align="center">
            <Grid item xs={12}>
              <TextField
                id="name"
                label="Your Name"
                name="name"
                value={name}
                onChange={handleChange}
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
                value={email}
                onChange={handleChange}
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
            <Grid item xs={12}>
              <TextField
                id="message"
                name="message"
                variant="filled"
                label="Your Message"
                value={message}
                onChange={handleChange}
                multiline
                fullWidth
                rows={8}
                placeholder="Type your message here..."
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
            <Grid item xs={12}>
              <Button 
                type="submit" 
                variant="outlined" 
                color="secondary" 
                disabled={state.submitting}
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