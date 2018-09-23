import React from 'react';
import { withRouter } from 'react-router-dom';
import * as paths from './paths';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header_container">
      <center>MyGym</center>
        <ul className="header_progressbar">
          <li
            className={
              paths.INFORMATION_REQUEST_PATH === this.props.location.pathname
                ? 'header_active'
                : ''
            }
          >
            Information<br />Request
          </li>          
          <li
            className={
              paths.VERIFY_PATH === this.props.location.pathname
                ? 'header_active'
                : ''
            }
          >
            Verify
          </li>      
        </ul>
      </div>
    );
  }
}

export default withRouter(Header);
