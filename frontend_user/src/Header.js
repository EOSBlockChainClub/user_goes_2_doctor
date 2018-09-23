import React from 'react';
import { withRouter } from 'react-router-dom';
import * as paths from './paths';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header_container">
      <center>Joe</center>
        <ul className="header_progressbar">
          <li
            className={
              paths.WELCOME_PATH === this.props.location.pathname
                ? 'header_active'
                : ''
            }
          >
            Welcome
          </li>
          <li
            className={
              paths.MASTER_PASSWORD_PATH === this.props.location.pathname
                ? 'header_active'
                : ''
            }
          >
            Retrieve<br />data
          </li>
          <li
            className={
              paths.SCAN_VERIFY_REQUEST_PATH === this.props.location.pathname
                ? 'header_active'
                : ''
            }
          >
            Read<br />request
          </li>    
          <li
            className={
              paths.PROVIDE_CLAIM_PATH === this.props.location.pathname
                ? 'header_active'
                : ''              
            }      
          > Provide<br />
             Data
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Header);
