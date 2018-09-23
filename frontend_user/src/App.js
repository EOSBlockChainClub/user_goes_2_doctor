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

class App extends Component {
  state = {
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Header />

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
                render={() => <MasterPassword />}
              />
              <Route
                exact
                path={paths.SCAN_VERIFY_REQUEST_PATH}
                render={() => <ScanVerifyClaim onRequestExtracted={this.onRequestExtracted} />}
              />              
            </div>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
