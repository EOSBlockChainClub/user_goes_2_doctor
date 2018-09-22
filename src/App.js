import React, { Component } from 'react';
import logo from './logo.svg';
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
import WrappedLink from './WrappedLink';

const Scan = () => (
  <center>
    <WrappedLink to={paths.ENCRYPT_PATH} label="Encrypt" raised primary>
      Encrypt
    </WrappedLink>
  </center>
);

const Publish = () => <div>Publishing encrypted data to the blockchain...</div>;

class App extends Component {
  state = {
    medicalInformation: { heartRate: 60, bloodPressure: 140, sugarLevel: 5.4 },
    masterPassword: null
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
                component={Scan}
              />
              <Route exact path={paths.ENCRYPT_PATH} component={Encrypt} />
              <Route exact path={paths.PUBLISH_PATH} component={Publish} />
            </div>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
