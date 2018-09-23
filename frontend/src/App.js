import React, { Component } from 'react';
import './App.css';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Scan from './Scan.js';
import Header from './Header';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as paths from './paths';
//import TimePicker from 'react-toolbox/lib/time_picker/TimePicker';

import MedicalInformation from './MedicalInformation';
import DeriveData from './DeriveData';
import Encrypt from './Encrypt';
import Publish from './Publish';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  state = {
    medicalInformation: {
      name: 'Name',
      heartRate: 60,
      bloodPressure: 140,
      sugarLevel: 5.4,
      sodium: 135,
      ionizedCalcium: 1.03,
      transferrin: 400,
      ferritin: 800,
      cholesterol: 0.9
    },
    masterPassword: null,
    keys: null
  };

  onKeysExtracted = keys => {
    this.setState({ keys });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
          <AppBar>
            <Toolbar>
              <Typography variant="title" color="inherit">
                Fuzi - Dr. House
              </Typography>
            </Toolbar>
          </AppBar>
            <Header />

            <div>
              <Route
                exact
                path={paths.MEDICAL_INFORMATION_PATH}
                render={() => (
                  <MedicalInformation {...this.state.medicalInformation} />
                )}
              />
              <Route
                exact
                path={paths.DERIVE_DATA_PATH}
                render={() => <DeriveData {...this.state.medicalInformation} />}
              />
              <Route
                exact
                path={paths.SCAN_MASTER_PASSWORD_PATH}
                render={() => <Scan onKeysExtracted={this.onKeysExtracted} />}
              />
              <Route exact path={paths.ENCRYPT_PATH} component={Encrypt} />
              <Route
                exact
                path={paths.PUBLISH_PATH}
                render={() => (
                  <Publish
                    keys={this.state.keys}
                    medicalInformation={this.state.medicalInformation}
                  />
                )}
              />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
