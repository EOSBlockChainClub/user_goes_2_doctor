import React from 'react';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
class MedicalInformation extends React.Component {
  render() {
    return (
      <div>
        <div>Medical Information</div>
        <ul>
          <li>Heart Rate: {this.props.heartRate} b.p.s.</li>
          <li>Blood Pressure: {this.props.bloodPressure} nmHg</li>
          <li>Sugar Level: {this.props.bloodPressure} mmol/L</li>
          <li>Sodium: {this.props.sodium} mmol/L</li>
          <li>Ionized calcium (Ca): {this.props.ionizedCalcium} mmol/L</li>
          <li>Transferrin: {this.props.transferrin} μmol/L</li>
          <li>Ferritin: {this.props.ferritin} pmol/L</li>
          <li>Cholesterol: {this.props.ferritin} mg/dL</li>
        </ul>
        <center>
          <WrappedLink
            to={paths.DERIVE_DATA_PATH}
            label="Derive Data"
            raised
            primary
          >
            Derive Data
          </WrappedLink>
        </center>
      </div>
    );
  }
}

export default MedicalInformation;
