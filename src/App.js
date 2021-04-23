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
      main: '#E7E7E5'
    },
    secondary: {
      main: '#f50057'
    },
    text: {
      primary: "#99A3A4",
      secondary: '#e6e6e6'
    },
    typography: {
      fontFamily: 'Antonio',
      fontWeightLight: 100,
      fontWeightRegular: 200,
      fontWeightMedium: 300,
      fontWeightBold: 400,
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
