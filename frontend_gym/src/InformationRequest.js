import React from 'react';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as verify from './verifyFunctions'
class InformationRequest extends React.Component {
  render() {
    return (
      <div>
        <div>YourGym needs certificate for</div>
        <div>
        Is the subject in good condition to exercise?            
        </div>
        <img src="images/qr-code.png"/>
        <center>
          <WrappedLink
            to={paths.VERIFY_PATH}
            label="Verify Certificate"
            raised
            primary
          >
            Verify Certificate
          </WrappedLink>
        </center>
      </div>
    );
  }
}

export default InformationRequest;
