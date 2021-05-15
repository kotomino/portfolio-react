import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Layout from './components/Layout';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b3b3cc'
    },
    secondary: {
      main: '#248f8f'
    },
    text: {
      primary: "#3F3D56",
      secondary: '#FACA67'
    },
  },
  typography: {
    h2: {
      fontFamily: 'Montserrat',
      fontSize: "4.5rem",
      fontWeight: 600
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 600
    },
    h4: {
      fontFamily: 'Montserrat',
      fontSize: "1.6rem",
      fontWeight: 600
    },
    h5: {
      fontFamily: 'Inconsolata',
      fontWeight: 600,
      fontSize: "1.3rem"
    },
    h6: {
      fontFamily: 'Montserrat',
      fontSize: "1rem",
      fontWeight: 600
    },
    body2: {
      fontFamily: 'Inconsolata',
      fontWeight: 600
    },
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={ Home } />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
