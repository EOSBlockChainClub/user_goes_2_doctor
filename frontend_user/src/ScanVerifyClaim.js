import React from 'react';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
import QrReader from 'react-qr-reader';
import ecc from 'eosjs-ecc';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
class ScanVerifyClaim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result',
      key: '',
      displayData: false,
      killCamera: true,
      keys: []
    };
    this.handleScan = this.handleScan.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
      this.setState({ killCamera: true });
      this.handleData(data);
    }
  }

  handleData(data) {
    console.log('handling Data ' + data);
    this.setState({killCamera:true})  
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: 20, marginTop: 20, textAlign:"center"}} >Provide Data</div>      

        {!this.state.killCamera && (
            <QrReader
              delay={this.state.delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
            />
          )}

        {this.state.killCamera && (
            <div>
              <center><b>MyGym</b> wants to know <br/>whether you are healthy<br/></center>
            </div>
        )}

        <center>
        <div style={{ marginBottom: 20, marginTop: 20 }}>
          {this.state.killCamera && (
          <WrappedLink
          to={paths.PROVIDE_CLAIM_PATH}
          label="Release Data"
          raised
          primary
        >
          Release Data
        </WrappedLink>  
          )}
          </div>
          <WrappedLink
            to={paths.WELCOME_PATH}
            label="Back"
            raised
            primary
          >
            Back
          </WrappedLink>
        </center>        
      </div>
    );
  }
}

export default ScanVerifyClaim;
