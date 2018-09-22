import React, { Component } from 'react';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

class Encrypt extends React.Component {
  render() {
    console.log({ props: this.props });
    return (
      <div>
        <div className="Encrypt">Encrypt</div>
        
        <ul>
          <li>Is the subject able to drive? <FontAwesomeIcon icon={faKey} /></li>
          <li>Is the subject in good condition to exercise? <FontAwesomeIcon icon={faKey} /></li>
          <li>Can the subject flight a commercial airplane? <FontAwesomeIcon icon={faKey} /></li>
          <li>
            Does the subject qualify for life insurance according to phisical
            conditions?
           <FontAwesomeIcon icon={faKey} /></li>
          <li>Should the subject be allowed to compete in a Marathon? <FontAwesomeIcon icon={faKey} /></li>
        </ul>
        <center>
          <WrappedLink
            to={paths.PUBLISH_PATH}
            label="Scan"
            raised
            primary
          >
            Publish
          </WrappedLink>
        </center>
      </div>
    );
  }
}

export default Encrypt;
