import React from 'react';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
class ScanVerifyClaim extends React.Component {
  render() {
    return (
      <div>
        <div>Provide Data</div>      
        
        <center>
          <WrappedLink
            to={paths.WELCOME_PATH}
            label="Back"
            raised
            primary
          >
            Back
          </WrappedLink>
        </center>        
      </div>
    );
  }
}

export default ScanVerifyClaim;
