import React, { Component } from 'react';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
class DeriveData extends React.Component {
  render() {
    console.log({ props: this.props });
    return (
      <div>
        <div>Derived Data</div>
        <ul>
          <li>Is the subject able to drive?</li>
          <li>Is the subject in good condition to exercise?</li>
          <li>Can the subject flight a commercial airplane?</li>
          <li>
            Does the subject qualify for life insurance according to phisical
            conditions?
          </li>
          <li>Should the subject be allowed to compete in a Marathon?</li>
        </ul>
        <center>
          <WrappedLink
            to={paths.SCAN_MASTER_PASSWORD_PATH}
            label="Scan"
            raised
            primary
          >
            Scan
          </WrappedLink>
        </center>
      </div>
    );
  }
}

export default DeriveData;
