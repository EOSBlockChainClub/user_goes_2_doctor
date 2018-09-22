import React, { Component } from 'react';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
class MedicalInformation extends React.Component {
  render() {
    console.log({ props: this.props });
    return (
      <div>
        <div>Medical Information</div>
        <ul>
          <li>Heart Rate: {this.props.heartRate} b.p.s.</li>
          <li>Blood Pressure: {this.props.bloodPressure} nmHg</li>
          <li>Sugar Level: {this.props.bloodPressure} mmol/L</li>
        </ul>
        <center>
          <WrappedLink
            to={paths.DERIVE_DATA_PATH}
            label="Derive Data"
            raised
            primary
            onClick={this.testButtonOnClick}
          >
            Derive Data
          </WrappedLink>
        </center>
      </div>
    );
  }
}

export default MedicalInformation;
