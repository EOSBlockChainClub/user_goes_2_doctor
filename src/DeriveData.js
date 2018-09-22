import React from 'react';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
import * as deriveDataComputation from './deriveDataComputation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
class DeriveData extends React.Component {
  render() {
    return (
      <div>
        <div>
          Automated fuzzy data derivation from the detailed medical record:
        </div>
        <ul>
          <li>
            Is the subject able to drive?{' '}
            <FontAwesomeIcon
              icon={
                deriveDataComputation.canDrive(this.props.medicalInformation)
                  ? faCheck
                  : faTimes
              }
            />
          </li>
          <li>
            Is the subject in good condition to exercise?{' '}
            <FontAwesomeIcon
              icon={
                deriveDataComputation.canGym(this.props.medicalInformation)
                  ? faCheck
                  : faTimes
              }
            />
          </li>
          <li>
            Can the subject flight a commercial airplane?{' '}
            <FontAwesomeIcon
              icon={
                deriveDataComputation.canFly(this.props.medicalInformation)
                  ? faCheck
                  : faTimes
              }
            />
          </li>
          <li>
            Does the subject qualify for life insurance according to phisical
            conditions?{' '}
            <FontAwesomeIcon
              icon={
                deriveDataComputation.canInsurance(
                  this.props.medicalInformation
                )
                  ? faCheck
                  : faTimes
              }
            />
          </li>
          <li>
            Should the subject be allowed to compete in a Marathon?{' '}
            <FontAwesomeIcon
              icon={
                deriveDataComputation.canMarathon(this.props.medicalInformation)
                  ? faCheck
                  : faTimes
              }
            />
          </li>
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
