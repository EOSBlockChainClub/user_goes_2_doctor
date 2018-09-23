import React from 'react';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <center>Your Data Manager</center>      
        
        <center>
          <WrappedLink
            to={paths.MASTER_PASSWORD_PATH}
            label="Retrieve Data"
            raised
            primary
          >
            Retrieve Data
          </WrappedLink>
          <br/>
          <WrappedLink
            to={paths.SCAN_VERIFY_REQUEST_PATH}
            label="Provide Data"
            raised
            primary
          >
            Provide Data
          </WrappedLink>
        </center>
      </div>
    );
  }
}

export default Welcome;
