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
        <div>Retrieve Data</div>      
        
        Dr. House

        <div>
          {this.props.masterSecret}<br/>
          <img width="80%" src="images/mastersecret.png"/>
        </div>
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

export default MasterPassword;
