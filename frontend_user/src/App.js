import React, { Component } from 'react';
import './App.css';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Header from './Header';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as paths from './paths';
//import TimePicker from 'react-toolbox/lib/time_picker/TimePicker';

import Welcome from './Welcome';
import MasterPassword from './MasterPassword';
import ScanVerifyClaim from './ScanVerifyClaim';
import ProvideClaim from './ProvideClaim'
import ScanLocation from './ScanLocation'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  state = {
    claims : [],
    locations: [],
  };

  onLocationsReceived(locations) {
    this.setState({locations:locations})
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
          <AppBar>
            <Toolbar>
              <Typography variant="title" color="inherit">
                Fuzi - Joe
              </Typography>
            </Toolbar>
          </AppBar>
            <div>
              <Route
                exact
                path={paths.WELCOME_PATH}
                render={() => (
                  <Welcome />
                )}
              />
              <Route
                exact
                path={paths.MASTER_PASSWORD_PATH}
                render={() => <MasterPassword masterSecret="This is very secret"
                />}
              />
              <Route
                exact
                path={paths.SCAN_LOCATION_PATH}
                render={() => <ScanLocation onLocationsReceived={this.onLocationsReceived}/>}
              />
              <Route
                exact
                path={paths.SCAN_VERIFY_REQUEST_PATH}
                render={() => <ScanVerifyClaim />}
              />
              <Route
                exact
                path={paths.PROVIDE_CLAIM_PATH}
                render={() => <ProvideClaim masterSecret="This is very secret"
                claims={this.state.claims}
                informationRequest={2}
                />}
              />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
