//scans QR, then deterministic hashing SHA256

import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import ecc from 'eosjs-ecc';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
import * as verify from './verifyFunctions'
let Eos = require('eosjs');

const HTTP_STORAGE_API_ENDPOINT = 'http://10.20.10.100:4000/fuzzy/storage/';
const HTTP_FUZZY_API_ENDPOINT = 'http://10.20.10.100:4000/fuzzy/';

export default class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result',
      key: '',
      displayData: false,
      killCamera: false,
      displayError: false,
      error: undefined,
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

  async handleData(data) {
    console.log('handling Data ' + data);
    const claim = JSON.parse(data);
    console.log('handling Data ' + claim);
    const rawResponseStorage = await fetch(HTTP_STORAGE_API_ENDPOINT + claim.location, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });      
    
    const responseStorage = await rawResponseStorage.text();
    console.log('handling storage ' + responseStorage);
    const encryptedData = responseStorage.encryptedData;
    const hash = ecc.sha256(encryptedData)
    const plainData = ecc.decrypt(claim.key, encryptedData);
    
    const useraccount = ecc.recover(plainData)

    const rawResponseFuzzy = await fetch(HTTP_FUZZY_API_ENDPOINT + hash, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }});

    const responseFuzzy = await rawResponseFuzzy.json();
    if (responseFuzzy.user === useraccount) {
      if (verify.canGym(plainData)) {
          this.setState({displayData:true, verifyResult:true});
      } else {
        this.setState({displayData:true, verifyResult:false});
      }
    } else {
      this.setState({displayError:true, error:Error("Invalid User")});
    }
  }


  handleError(err) {
    console.error(err);
  }

  render() {
    return (
      <div>
        <div>
          {!this.state.killCamera && (
            <QrReader
              delay={this.state.delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
            />
          )}
        </div>
        {this.state.killCamera && (
          <center>            
            {this.state.displayData && (
              <div>Result: {this.state.verifyResult}</div>
            )}
            {this.state.displayError && (
              <div>{this.state.error}</div>
            )}
          </center>
        )}
      </div>
    );
  }
}
