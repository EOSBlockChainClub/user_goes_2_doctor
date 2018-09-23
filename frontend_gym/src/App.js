import React, { Component } from 'react';
import './App.css';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Scan from './Verify';
import Header from './Header';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as paths from './paths';
//import TimePicker from 'react-toolbox/lib/time_picker/TimePicker';

import InformationRequest from './InformationRequest';
import Verify from './Verify';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  state = {
    key: null
  };

  onKeysExtracted = key => {
    this.setState({ key });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Header />
            <AppBar>
              <Toolbar>
                <Typography variant="title" color="inherit">
                  EOS ID
                </Typography>
              </Toolbar>
            </AppBar>
            <div>
              <Route
                exact
                path={paths.INFORMATION_REQUEST_PATH}
                render={() => (
                  <InformationRequest {...this.state.key} />
                )}
              />
              <Route
                exact
                path={paths.VERIFY_PATH}
                render={() => <Verify {...this.state.key} />}
              />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
