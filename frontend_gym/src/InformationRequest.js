import React from 'react';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
class InformationRequest extends React.Component {
  render() {
    return (
      <div>
        <div>YourGym needs certificate for</div>
        <div>
        Is the subject in good condition to exercise?{' '}
            <FontAwesomeIcon
              icon={
                deriveDataComputation.canGym(this.props.medicalInformation)
                  ? faCheck
                  : faTimes
              }
            />
        </div>
        
        <center>
          <WrappedLink
            to={paths.DERIVE_DATA_PATH}
            label="Receive Certificate"
            raised
            primary
          >
            Receive Certificate
          </WrappedLink>
        </center>
      </div>
    );
  }
}

export default InformationRequest;
