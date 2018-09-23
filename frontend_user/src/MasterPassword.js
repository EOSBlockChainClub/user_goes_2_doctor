import React from 'react';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
class MasterPassword extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <center>Retrieve Data</center>
        <center><b>Dr. House</b></center>
        <div>        
          <center>{this.props.masterSecret}          
          <br />
          <img width="80%" src="images/mastersecret.png" />
          </center>
        </div>
        <center>
          <div style={{ marginTop: 20 }}>
          <WrappedLink to={paths.SCAN_LOCATION_PATH} label="Get Location" raised primary>
              Get Location
            </WrappedLink>
            </div>
            <br/>
            <div>
            <WrappedLink to={paths.WELCOME_PATH} label="Back" raised primary>
              Back
            </WrappedLink>
          </div>
        </center>
      </div>
    );
  }
}

export default MasterPassword;
