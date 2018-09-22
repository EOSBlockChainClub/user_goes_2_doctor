import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as paths from './paths';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header_container">
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
    switch (this.props.location.pathname) {
      case paths.MEDICAL_INFORMATION_PATH:
        return <header className="App-header" />;
      case paths.DERIVE_DATA_PATH:
        return <header className="App-header" />;
      case paths.SCAN_MASTER_PASSWORD_PATH:
        return <header className="App-header" />;
      case paths.ENCRYPT_PATH:
        return <header className="App-header" />;
      case paths.PUBLISH_PATH:
        return <header className="App-header" />;
      default:
        return null;
    }
  }
}

export default withRouter(Header);
