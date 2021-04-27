import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Layout from './components/Layout';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: '#FACA67'
    },
    text: {
      primary: "#C0C0C0",
      secondary: '#22448B'
    },
  },
  typography: {
    h2: {
      fontFamily: 'Montserrat',
      fontSize: "4.5rem",
      fontWeight: 600
    },
    h4: {
      fontFamily: 'Montserrat',
      fontSize: "1.6rem",
    },
    h6: {
      fontFamily: 'Montserrat',
      fontSize: "1rem",
      fontWeight: 600
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/resume" component={ Resume } /> 
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
