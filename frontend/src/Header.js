import React from 'react';
import { withRouter } from 'react-router-dom';
import * as paths from './paths';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header_container">
      <center>Dr House</center>
        <ul className="header_progressbar">
          <li
            className={
              paths.MEDICAL_INFORMATION_PATH === this.props.location.pathname
                ? 'header_active'
                : ''
            }
          >
            Medical<br />information
          </li>
          <li
            className={
              paths.DERIVE_DATA_PATH === this.props.location.pathname
                ? 'header_active'
                : ''
            }
          >
            Derive<br />data
          </li>
          <li
            className={
              paths.SCAN_MASTER_PASSWORD_PATH === this.props.location.pathname
                ? 'header_active'
                : ''
            }
          >
            Scan master<br />password
          </li>
          <li
            className={
              paths.ENCRYPT_PATH === this.props.location.pathname
                ? 'header_active'
                : ''
            }
          >
            Encrypt
          </li>
          <li
            className={
              paths.PUBLISH_PATH === this.props.location.pathname
                ? 'header_active'
                : ''
            }
          >
            Publish
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Header);
